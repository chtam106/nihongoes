'use client';

import { useEffect, useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Stack,
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

const CHECKBOX_LABEL_SX = {
  mx: 0,
  ml: 0,
  pl: 0,
  my: 0,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '& .MuiCheckbox-root': {
    py: 0.25,
    ml: '-9px'
  }
} as const;

export function AppSettings() {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useUserPreferences();
  const speechSupported = useSpeechSupported();
  const showAudioControls = speechSupported && preferences.allowTts;
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

          <Stack spacing={0.5} sx={{ alignItems: 'flex-start', width: '100%' }}>
            {speechSupported && (
              <FormControlLabel
                sx={CHECKBOX_LABEL_SX}
                control={
                  <Checkbox
                    size="small"
                    checked={preferences.allowTts}
                    onChange={(_event, checked) => {
                      if (!checked) {
                        cancelSpeech();
                      }
                      setPreferences({ ...preferences, allowTts: checked });
                    }}
                  />
                }
                label={t('settings.allowTts')}
              />
            )}
            <FormControlLabel
              sx={CHECKBOX_LABEL_SX}
              control={
                <Checkbox
                  size="small"
                  checked={preferences.showTranslation}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showTranslation: checked })
                  }
                />
              }
              label={t('settings.showTranslation')}
            />
            <FormControlLabel
              sx={CHECKBOX_LABEL_SX}
              control={
                <Checkbox
                  size="small"
                  checked={preferences.showFurigana}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showFurigana: checked })
                  }
                />
              }
              label={t('settings.showFurigana')}
            />
          </Stack>

          <Divider />

          <Stack spacing={0.5} sx={{ alignItems: 'flex-start', width: '100%' }}>
            <FormControlLabel
              sx={CHECKBOX_LABEL_SX}
              control={
                <Checkbox
                  size="small"
                  checked={preferences.showScrollToTop}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showScrollToTop: checked })
                  }
                />
              }
              label={t('settings.showScrollToTop')}
            />
            <FormControlLabel
              sx={CHECKBOX_LABEL_SX}
              control={
                <Checkbox
                  size="small"
                  checked={preferences.showSectionNav}
                  onChange={(_event, checked) =>
                    setPreferences({ ...preferences, showSectionNav: checked })
                  }
                />
              }
              label={t('settings.showSectionNav')}
            />
          </Stack>

          {showAudioControls && (
            <>
              <Divider />
              <Stack spacing={1.5}>
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
              </Stack>
            </>
          )}
        </Stack>
      </Popover>
    </>
  );
}
