'use client';

import { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Stack,
  Switch,
  Typography
} from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';
import {
  cancelSpeech,
  getDefaultJapaneseVoice,
  getJapaneseVoices,
  getPreferredVoiceURI,
  getSpeechRate,
  setPreferredVoiceURI,
  setSpeechRate,
  speakJapanese,
  subscribeVoices,
  useSpeechSupported
} from '@/utils/speech.ts';

const SPEED_OPTIONS = [0.6, 0.75, 0.9, 1, 1.15];
const SAMPLE_TEXT = 'こんにちは。はじめまして。';

const TOGGLE_LABEL_SX = {
  mx: 0,
  ml: 0,
  pl: 0,
  alignItems: 'center',
  '& .MuiSwitch-root': {
    ml: '-9px'
  }
} as const;

export function AppSettings() {
  const { t } = useTranslation();
  const speechSupported = useSpeechSupported();
  const [preferences, setPreferences] = useUserPreferences();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => getJapaneseVoices());
  const [voiceURI, setVoiceURI] = useState<string>(() => getPreferredVoiceURI() ?? '');
  const [rate, setRate] = useState<number>(() => getSpeechRate());

  useEffect(() => {
    const unsubscribe = subscribeVoices(() => setVoices(getJapaneseVoices()));
    const timeout = window.setTimeout(() => setVoices(getJapaneseVoices()), 500);

    return () => {
      window.clearTimeout(timeout);
      unsubscribe();
    };
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
    cancelSpeech();
  };

  const handleVoiceChange = (uri: string) => {
    setVoiceURI(uri);
    setPreferredVoiceURI(uri || null);
    speakJapanese(SAMPLE_TEXT);
  };

  const handleRateChange = (value: number) => {
    setRate(value);
    setSpeechRate(value);
    speakJapanese(SAMPLE_TEXT, value);
  };

  const defaultVoiceURI = getDefaultJapaneseVoice(voices)?.voiceURI ?? '';
  const selectedVoice = voices.some((voice) => voice.voiceURI === voiceURI)
    ? voiceURI
    : defaultVoiceURI;

  const showAudio = speechSupported;

  return (
    <>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        aria-label={t('settings.title')}
        color="inherit"
      >
        <SettingsOutlinedIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Stack spacing={2} sx={{ p: 2, width: 280 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {t('settings.title')}
          </Typography>

          {showAudio && (
            <Stack spacing={2}>
              <FormControl size="small" fullWidth disabled={voices.length === 0}>
                <InputLabel id="app-settings-voice-label">{t('audio.voice')}</InputLabel>
                <Select
                  labelId="app-settings-voice-label"
                  label={t('audio.voice')}
                  value={selectedVoice}
                  onChange={(event) => handleVoiceChange(String(event.target.value))}
                >
                  <MenuItem value="">{t('audio.auto')}</MenuItem>
                  {voices.map((voice) => (
                    <MenuItem key={voice.voiceURI} value={voice.voiceURI}>
                      {voice.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel id="app-settings-speed-label">{t('audio.speed')}</InputLabel>
                <Select
                  labelId="app-settings-speed-label"
                  label={t('audio.speed')}
                  value={rate}
                  onChange={(event) => handleRateChange(Number(event.target.value))}
                >
                  {SPEED_OPTIONS.map((speed) => (
                    <MenuItem key={speed} value={speed}>
                      {speed}x
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {voices.length === 0 && (
                <Typography color="text.secondary">{t('audio.noVoices')}</Typography>
              )}
              {voices.length > 0 && (
                <Button
                  startIcon={<PlayArrowIcon />}
                  variant="outlined"
                  size="small"
                  onClick={() => speakJapanese(SAMPLE_TEXT)}
                >
                  {t('audio.test')}
                </Button>
              )}
            </Stack>
          )}

          {showAudio && <Divider />}

          <Stack spacing={0.5}>
            <FormControlLabel
              sx={TOGGLE_LABEL_SX}
              control={
                <Switch
                  checked={preferences.showScrollToTop}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showScrollToTop: checked })
                  }
                />
              }
              label={t('settings.showScrollToTop')}
            />
            <FormControlLabel
              sx={TOGGLE_LABEL_SX}
              control={
                <Switch
                  checked={preferences.showSectionNav}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showSectionNav: checked })
                  }
                />
              }
              label={t('settings.showSectionNav')}
            />
          </Stack>
        </Stack>
      </Popover>
    </>
  );
}
