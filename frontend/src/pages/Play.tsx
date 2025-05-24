import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';

type LessonState = 'idle' | 'playing' | 'paused' | 'finished';

const Play: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();
  const [state, setState] = useState<LessonState>('idle');

  const startLesson = () => {
    setState('playing');
    // TODO: fetch(`/songs/${songId}`) and start midi playback
  };

  const pauseLesson = () => setState('paused');
  const resumeLesson = () => setState('playing');
  const endLesson = () => setState('finished');

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Playing song {songId}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        {state === 'idle' && (
          <Button variant="contained" onClick={startLesson}>
            Start Lesson
          </Button>
        )}
        {state === 'playing' && (
          <Button variant="contained" onClick={pauseLesson}>
            Pause
          </Button>
        )}
        {state === 'paused' && (
          <Button variant="contained" onClick={resumeLesson}>
            Resume
          </Button>
        )}
        {(state === 'playing' || state === 'paused') && (
          <Button variant="outlined" onClick={endLesson}>
            End
          </Button>
        )}
      </Stack>
      <Box className="score-placeholder" sx={{ border: '1px dashed grey', p: 2 }}>
        {/* Score display will go here */}
      </Box>
    </Box>
  );
};

export default Play;
