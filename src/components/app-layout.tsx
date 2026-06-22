import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { isNavGroupActive, navGroups, type NavItem } from '@/constants/nav-items.ts'

const drawerWidth = 240

function getInitialExpandedGroups(pathname: string) {
  return Object.fromEntries(
    navGroups.map((group) => [group.label, isNavGroupActive(group, pathname)]),
  )
}

function NavItemIcon({ item }: { item: Pick<NavItem, 'icon' | 'symbol'> }) {
  const Icon = item.icon

  if (Icon) {
    return <Icon fontSize="small" />
  }

  return (
    <Typography variant="body1" component="span" sx={{ fontWeight: 600 }}>
      {item.symbol}
    </Typography>
  )
}

function AppLayout() {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() =>
    getInitialExpandedGroups(location.pathname),
  )

  useEffect(() => {
    setExpandedGroups((previous) => {
      const next = { ...previous }

      for (const group of navGroups) {
        if (isNavGroupActive(group, location.pathname)) {
          next[group.label] = true
        }
      }

      return next
    })
  }, [location.pathname])

  const toggleGroup = (label: string) => {
    setExpandedGroups((previous) => ({
      ...previous,
      [label]: !previous[label],
    }))
  }

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar sx={{ px: 2 }}>
        <Typography variant="h6" component="p" noWrap>
          Learn Japanese
        </Typography>
      </Toolbar>

      <List sx={{ px: 1, flex: 1 }}>
        {navGroups.map((group) => {
          const isExpanded = expandedGroups[group.label] ?? false
          const GroupIcon = group.icon

          return (
            <Box key={group.label} sx={{ mb: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemButton
                  component={NavLink}
                  to={group.path}
                  selected={location.pathname === group.path}
                  onClick={() => setMobileOpen(false)}
                  sx={{ flex: 1, borderRadius: 1 }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {GroupIcon ? <GroupIcon fontSize="small" /> : null}
                  </ListItemIcon>
                  <ListItemText primary={group.label} />
                </ListItemButton>

                <IconButton
                  size="small"
                  aria-label={isExpanded ? `Collapse ${group.label}` : `Expand ${group.label}`}
                  aria-expanded={isExpanded}
                  onClick={() => toggleGroup(group.label)}
                  sx={{ mr: 0.5 }}
                >
                  {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </IconButton>
              </Box>

              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {group.children.map((child) => (
                    <ListItemButton
                      key={child.path}
                      component={NavLink}
                      to={child.path}
                      selected={location.pathname === child.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{ pl: 4, borderRadius: 1, mb: 0.5 }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <NavItemIcon item={child} />
                      </ListItemIcon>
                      <ListItemText primary={child.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          )
        })}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            zIndex: (muiTheme) => muiTheme.zIndex.drawer + 1,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
          <Toolbar>
            <IconButton edge="start" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="p" noWrap>
              Learn Japanese
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: 1,
              borderColor: 'divider',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 8, md: 0 },
          minWidth: 0,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default AppLayout
