import { useCallback, useEffect, useState } from 'react';
import { usePathname } from '@/i18n/navigation.tsx';
import { LocaleNavLink as NavLink } from '@/components/locale-link';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';
import { useTranslation } from '@/i18n/use-translation.ts';
import { routes } from '@/constants/routes.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import {
  isNavGroupActive,
  loadCourseLessonNavItems,
  navGroups,
  type NavItem
} from '@/constants/nav-items.ts';

const NAV_ROW_PY = 1.5;

function navDividerBorder(theme: Theme) {
  return `1px solid ${alpha(
    theme.palette.text.primary,
    theme.palette.mode === 'light' ? 0.08 : 0.16
  )}`;
}

const HOVER_TRANSPARENT_SX = {
  '&:hover': {
    bgcolor: 'transparent',
    '@media (hover: none)': { bgcolor: 'transparent' }
  },
  '&.Mui-selected:hover': {
    bgcolor: 'transparent',
    '@media (hover: none)': { bgcolor: 'transparent' }
  }
} as const;

const NAV_ITEM_HOVER_SX = {
  bgcolor: 'transparent',
  '&:hover': {
    bgcolor: 'transparent',
    '@media (hover: none)': { bgcolor: 'transparent' },
    '& .MuiListItemIcon-root': { color: 'primary.main' },
    '& .MuiListItemText-primary': { color: 'primary.main' }
  },
  '&.Mui-selected': {
    bgcolor: 'transparent',
    '& .MuiListItemIcon-root': { color: 'primary.main' },
    '& .MuiListItemText-primary': { color: 'primary.main' }
  },
  '&.Mui-selected:hover': {
    bgcolor: 'transparent',
    '@media (hover: none)': { bgcolor: 'transparent' },
    '& .MuiListItemIcon-root': { color: 'primary.main' },
    '& .MuiListItemText-primary': { color: 'primary.main' }
  }
} as const;

type NavItemIconProps = {
  item: Pick<NavItem, 'icon' | 'symbol'>;
};

function NavItemIcon({ item }: NavItemIconProps) {
  const Icon = item.icon;

  if (Icon) {
    return <Icon fontSize="small" />;
  }

  return (
    <Typography variant="body1" component="span" sx={{ fontWeight: 600 }}>
      {item.symbol}
    </Typography>
  );
}

type AppDrawerContentProps = {
  onNavigate: () => void;
};

export function AppDrawerContent({ onNavigate }: AppDrawerContentProps) {
  const logicalPathname = usePathname();
  const { locale, t } = useTranslation();
  const [courseChildrenByLevel, setCourseChildrenByLevel] = useState<
    Partial<Record<CourseLevel, NavItem[]>>
  >({});
  const [loadingLevels, setLoadingLevels] = useState<Partial<Record<CourseLevel, boolean>>>({});
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      navGroups.map((group) => [group.path, isNavGroupActive(group, logicalPathname)])
    )
  );

  const ensureCourseChildren = useCallback(
    async (level: CourseLevel) => {
      if (courseChildrenByLevel[level] || loadingLevels[level]) {
        return;
      }

      setLoadingLevels((previous) => ({ ...previous, [level]: true }));

      try {
        const children = await loadCourseLessonNavItems(level);
        setCourseChildrenByLevel((previous) => ({ ...previous, [level]: children }));
      } finally {
        setLoadingLevels((previous) => ({ ...previous, [level]: false }));
      }
    },
    [courseChildrenByLevel, loadingLevels]
  );

  const toggleGroup = (path: string, level?: CourseLevel) => {
    const isExpanded = expandedGroups[path] ?? false;

    setExpandedGroups((previous) => ({
      ...previous,
      [path]: !isExpanded
    }));

    if (!isExpanded && level) {
      void ensureCourseChildren(level);
    }
  };

  useEffect(() => {
    navGroups.forEach((group) => {
      if (!group.courseLevel) {
        return;
      }

      if (expandedGroups[group.path]) {
        void ensureCourseChildren(group.courseLevel);
      }
    });
  }, [expandedGroups, ensureCourseChildren]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List
        className="hide-scrollbar"
        disablePadding
        sx={(muiTheme) => {
          const dividerInset = muiTheme.spacing(2);

          return {
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            minHeight: 0,
            '& > .nav-group-item': {
              position: 'relative'
            },
            '& > .nav-group-item + .nav-group-item::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: dividerInset,
              right: dividerInset,
              borderTop: navDividerBorder(muiTheme)
            },
            '& > .nav-group-item:last-child::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: dividerInset,
              right: dividerInset,
              borderBottom: navDividerBorder(muiTheme)
            }
          };
        }}
      >
        {navGroups.map((group) => {
          const groupLabel = group.label ? group.label[locale] : t(group.labelKey ?? '');
          const isExpanded = expandedGroups[group.path] ?? false;
          const dynamicChildren = group.courseLevel
            ? (courseChildrenByLevel[group.courseLevel] ?? [])
            : [];
          const children = group.courseLevel ? dynamicChildren : group.children;
          const hasChildren = group.courseLevel ? true : children.length > 0;
          const isLoadingChildren = group.courseLevel ? loadingLevels[group.courseLevel] : false;
          const GroupIcon = group.icon;
          const isAlphabetGroup = group.labelKey === 'nav.alphabet';
          const isGroupHighlighted =
            logicalPathname === group.path ||
            (group.path === routes.flashcards &&
              logicalPathname.startsWith(`${routes.flashcards}/`));

          return (
            <Box
              key={group.path}
              component="li"
              className="nav-group-item"
              sx={{ listStyle: 'none', p: 0, m: 0 }}
            >
              {hasChildren && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 0,
                    bgcolor: 'transparent',
                    pr: 2,
                    '&:hover .MuiListItemText-primary, &:hover .MuiListItemIcon-root, &:hover .MuiIconButton-root':
                      {
                        color: 'primary.main'
                      }
                  }}
                >
                  <ListItemButton
                    component={NavLink}
                    to={group.path}
                    selected={isGroupHighlighted}
                    onClick={onNavigate}
                    sx={{
                      flex: 1,
                      py: NAV_ROW_PY,
                      borderRadius: 0,
                      ...NAV_ITEM_HOVER_SX
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {GroupIcon && <GroupIcon fontSize="small" />}
                    </ListItemIcon>
                    <ListItemText primary={groupLabel} />
                  </ListItemButton>

                  <IconButton
                    size="small"
                    color={isGroupHighlighted ? 'primary' : 'default'}
                    aria-label={
                      isExpanded
                        ? t('nav.collapse', { label: groupLabel })
                        : t('nav.expand', { label: groupLabel })
                    }
                    aria-expanded={isExpanded}
                    onClick={() => toggleGroup(group.path, group.courseLevel)}
                    sx={{
                      bgcolor: 'transparent',
                      ...HOVER_TRANSPARENT_SX
                    }}
                  >
                    {isExpanded && <ExpandLessIcon fontSize="small" />}
                    {!isExpanded && <ExpandMoreIcon fontSize="small" />}
                  </IconButton>
                </Box>
              )}
              {!hasChildren && (
                <ListItemButton
                  component={NavLink}
                  to={group.path}
                  selected={isGroupHighlighted}
                  onClick={onNavigate}
                  sx={{
                    py: NAV_ROW_PY,
                    borderRadius: 0,
                    ...NAV_ITEM_HOVER_SX
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {GroupIcon && <GroupIcon fontSize="small" />}
                  </ListItemIcon>
                  <ListItemText primary={groupLabel} />
                </ListItemButton>
              )}

              {hasChildren && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    sx={(muiTheme) => {
                      const insetLeft = isAlphabetGroup
                        ? `calc(${muiTheme.spacing(7)} + 32px)`
                        : `calc(${muiTheme.spacing(2)} + 40px)`;
                      const insetRight = muiTheme.spacing(1);

                      return {
                        mt: 0.5,
                        pl: 0,
                        '& .MuiListItemButton-root': {
                          position: 'relative'
                        },
                        '& .MuiListItemButton-root + .MuiListItemButton-root::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: insetLeft,
                          right: insetRight,
                          borderTop: navDividerBorder(muiTheme)
                        }
                      };
                    }}
                  >
                    {isLoadingChildren && (
                      <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Loading...
                        </Typography>
                      </Box>
                    )}
                    {!isLoadingChildren &&
                      children.map((child) => (
                        <ListItemButton
                          key={child.path}
                          component={NavLink}
                          to={child.path}
                          selected={
                            logicalPathname === child.path ||
                            logicalPathname.startsWith(`${child.path}/`)
                          }
                          onClick={onNavigate}
                          sx={{
                            pl: isAlphabetGroup ? 7 : 2,
                            py: NAV_ROW_PY,
                            borderRadius: 0,
                            minHeight: 56,
                            ...NAV_ITEM_HOVER_SX
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: isAlphabetGroup ? 32 : 40
                            }}
                          >
                            <NavItemIcon item={child} />
                          </ListItemIcon>
                          <ListItemText
                            primary={child.label ? child.label[locale] : t(child.labelKey ?? '')}
                            slotProps={{
                              primary: {
                                variant: 'body2',
                                sx: {
                                  lineHeight: 1.35,
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }
                              }
                            }}
                          />
                        </ListItemButton>
                      ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
}

export default AppDrawerContent;
