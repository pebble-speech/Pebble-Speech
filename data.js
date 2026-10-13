window.PEBBLE_SAMPLE_DATA = {
  "title": "Pebble Speech — Audio Samples",
  "dataset": "Seed-TTS English test set",
  "sampleCount": 4,
  "evaluationSize": 1088,
  "asr": "Qwen3-ASR-1.7B",
  "referenceGrouping": {
    "description": "Very Slow and Very Fast references are the bottom and top 10% of unique Seed-TTS prompts by transcript words per audio second.",
    "slowBoundary": 1.963,
    "fastBoundary": 3.303
  },
  "samples": [
    {
      "id": "slow-reference-fast-target",
      "utt": "common_voice_en_25693607-common_voice_en_25693609",
      "speeds": [
        "0.75"
      ],
      "eyebrow": "Cross-rate transfer",
      "title": "Very Slow Reference → Very Fast Target",
      "summary": "The reference is in the slowest 10% of Seed-TTS prompts. At the very-fast target, both Pebble backbones preserve the exact transcript while VoiceStar drops the final word.",
      "selection": "VoiceStar WER 11.11%; both Pebble backbones WER 0.00%.",
      "referenceText": "Eleven nations participated in the experiments.",
      "targetText": "An example of this is Virginia's personal property tax.",
      "referenceDuration": 4.384,
      "referenceWordsPerSecond": 1.369,
      "referenceGroup": "Very Slow",
      "sourceTargetDuration": 5.553,
      "rows": [
        {
          "speed": "0.75",
          "speedLabel": "Very Fast",
          "targetDuration": 4.165,
          "reference": {
            "audio": "audio/slow-reference-fast-target/reference.wav",
            "duration": 4.384
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/slow-reference-fast-target/cosyvoice2.wav",
              "duration": 4.68,
              "durationControlled": false,
              "transcript": "An example of this is Virginia's personal property tax.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/slow-reference-fast-target/voicestar_0.75.wav",
              "duration": 4.16,
              "durationControlled": true,
              "transcript": "An example of this is Virginia's personal property.",
              "substitutions": 0,
              "deletions": 1,
              "insertions": 0,
              "exact": false
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/slow-reference-fast-target/ours_cosyvoice2_0.75.wav",
              "duration": 4.16,
              "durationControlled": true,
              "transcript": "An example of this is Virginia's personal property tax.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/slow-reference-fast-target/ours_qwen3tts_0.75.wav",
              "duration": 4.16,
              "durationControlled": true,
              "transcript": "An example of this is Virginia's personal property tax.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        }
      ]
    },
    {
      "id": "fast-reference-slow-target",
      "utt": "common_voice_en_20791578-common_voice_en_20791579",
      "speeds": [
        "1.25"
      ],
      "eyebrow": "Cross-rate transfer",
      "title": "Very Fast Reference → Very Slow Target",
      "summary": "The reference is in the fastest 10% of Seed-TTS prompts by words per second. At the very-slow target, both Pebble backbones preserve the exact transcript while VoiceStar introduces a word substitution.",
      "selection": "VoiceStar WER 7.69%; both Pebble backbones WER 0.00%.",
      "referenceText": "He personally removed several wounded men and was the last to leave the village.",
      "targetText": "During that cruise Princess Cruises marked the first ever call in Ilhabela, Brazil.",
      "referenceDuration": 4.076,
      "referenceWordsPerSecond": 3.434,
      "referenceGroup": "Very Fast",
      "sourceTargetDuration": 5.825,
      "rows": [
        {
          "speed": "1.25",
          "speedLabel": "Very Slow",
          "targetDuration": 7.281,
          "reference": {
            "audio": "audio/fast-reference-slow-target/reference.wav",
            "duration": 4.076
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/fast-reference-slow-target/cosyvoice2.wav",
              "duration": 6.44,
              "durationControlled": false,
              "transcript": "During that cruise, Princess Cruises marked the first ever call in Ilhabela, Brazil.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/fast-reference-slow-target/voicestar_1.25.wav",
              "duration": 7.28,
              "durationControlled": true,
              "transcript": "During that cruise, Princess Cruises marks the first ever call in Ilhabela, Brazil.",
              "substitutions": 1,
              "deletions": 0,
              "insertions": 0,
              "exact": false
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/fast-reference-slow-target/ours_cosyvoice2_1.25.wav",
              "duration": 7.28,
              "durationControlled": true,
              "transcript": "During that cruise, Princess Cruises marked the first ever call in Ilhabela, Brazil.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/fast-reference-slow-target/ours_qwen3tts_1.25.wav",
              "duration": 7.28,
              "durationControlled": true,
              "transcript": "During that cruise, Princess Cruises marked the first ever call in Ilhabela, Brazil.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        }
      ]
    },
    {
      "id": "fast-target-deletion",
      "utt": "common_voice_en_23733663-common_voice_en_23733666",
      "speeds": [
        "0.75"
      ],
      "eyebrow": "Failure recovery",
      "title": "Early Termination at a Very Fast Target",
      "summary": "VoiceStar terminates before the final word and CosyVoice2 introduces a word substitution. The two Pebble models retain the exact complete sentence.",
      "selection": "CosyVoice2 and VoiceStar WER 7.69%; both Pebble backbones WER 0.00%.",
      "referenceText": "In the city museum's graphic department there is a workshop displaying his printing equipment.",
      "targetText": "It was a mighty risk, but against it was an absolute black certainty.",
      "referenceDuration": 5.675,
      "referenceWordsPerSecond": 2.467,
      "referenceGroup": "Intermediate",
      "sourceTargetDuration": 5.12,
      "rows": [
        {
          "speed": "0.75",
          "speedLabel": "Very Fast",
          "targetDuration": 3.84,
          "reference": {
            "audio": "audio/fast-target-deletion/reference.wav",
            "duration": 5.675
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/fast-target-deletion/cosyvoice2.wav",
              "duration": 5.0,
              "durationControlled": false,
              "transcript": "It was a mighty risk, but against it was an absolute lack certainty.",
              "substitutions": 1,
              "deletions": 0,
              "insertions": 0,
              "exact": false
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/fast-target-deletion/voicestar_0.75.wav",
              "duration": 3.82,
              "durationControlled": true,
              "transcript": "It was a mighty risk, but against it was an absolute black.",
              "substitutions": 0,
              "deletions": 1,
              "insertions": 0,
              "exact": false
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/fast-target-deletion/ours_cosyvoice2_0.75.wav",
              "duration": 3.84,
              "durationControlled": true,
              "transcript": "It was a mighty risk, but against it was an absolute black certainty.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/fast-target-deletion/ours_qwen3tts_0.75.wav",
              "duration": 3.76,
              "durationControlled": true,
              "transcript": "It was a mighty risk, but against it was an absolute black certainty.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        }
      ]
    },
    {
      "id": "five-speed-sweep",
      "utt": "common_voice_en_22810002-common_voice_en_22810003",
      "speeds": [
        "1.25",
        "1.125",
        "1.0",
        "0.875",
        "0.75"
      ],
      "eyebrow": "Controllability",
      "title": "One Utterance Across Five Target Speeds",
      "summary": "The same reference voice and target text are synthesized at five duration rates. Listen vertically to compare rate control, then horizontally to compare systems.",
      "selection": "Both Pebble backbones are exact across all five monotonically controlled rates.",
      "referenceText": "It was quickly settled by Americans from the east, mainly from the Southern states.",
      "targetText": "After two or three months of trying he was forced to admit defeat.",
      "referenceDuration": 5.374,
      "referenceWordsPerSecond": 2.605,
      "referenceGroup": "Intermediate",
      "sourceTargetDuration": 5.58,
      "rows": [
        {
          "speed": "1.25",
          "speedLabel": "Very Slow",
          "targetDuration": 6.975,
          "reference": {
            "audio": "audio/five-speed-sweep/reference.wav",
            "duration": 5.374
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/five-speed-sweep/cosyvoice2.wav",
              "duration": 4.32,
              "durationControlled": false,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/five-speed-sweep/voicestar_1.25.wav",
              "duration": 6.96,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/five-speed-sweep/ours_cosyvoice2_1.25.wav",
              "duration": 6.96,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/five-speed-sweep/ours_qwen3tts_1.25.wav",
              "duration": 6.96,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        },
        {
          "speed": "1.125",
          "speedLabel": "Slow",
          "targetDuration": 6.277,
          "reference": {
            "audio": "audio/five-speed-sweep/reference.wav",
            "duration": 5.374
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/five-speed-sweep/cosyvoice2.wav",
              "duration": 4.32,
              "durationControlled": false,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/five-speed-sweep/voicestar_1.125.wav",
              "duration": 6.26,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/five-speed-sweep/ours_cosyvoice2_1.125.wav",
              "duration": 6.28,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/five-speed-sweep/ours_qwen3tts_1.125.wav",
              "duration": 6.24,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        },
        {
          "speed": "1.0",
          "speedLabel": "Natural",
          "targetDuration": 5.58,
          "reference": {
            "audio": "audio/five-speed-sweep/reference.wav",
            "duration": 5.374
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/five-speed-sweep/cosyvoice2.wav",
              "duration": 4.32,
              "durationControlled": false,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/five-speed-sweep/voicestar_1.0.wav",
              "duration": 5.56,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/five-speed-sweep/ours_cosyvoice2_1.0.wav",
              "duration": 5.56,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/five-speed-sweep/ours_qwen3tts_1.0.wav",
              "duration": 5.52,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        },
        {
          "speed": "0.875",
          "speedLabel": "Fast",
          "targetDuration": 4.882,
          "reference": {
            "audio": "audio/five-speed-sweep/reference.wav",
            "duration": 5.374
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/five-speed-sweep/cosyvoice2.wav",
              "duration": 4.32,
              "durationControlled": false,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/five-speed-sweep/voicestar_0.875.wav",
              "duration": 4.88,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/five-speed-sweep/ours_cosyvoice2_0.875.wav",
              "duration": 4.88,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/five-speed-sweep/ours_qwen3tts_0.875.wav",
              "duration": 4.88,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        },
        {
          "speed": "0.75",
          "speedLabel": "Very Fast",
          "targetDuration": 4.185,
          "reference": {
            "audio": "audio/five-speed-sweep/reference.wav",
            "duration": 5.374
          },
          "methods": [
            {
              "id": "cosyvoice2",
              "label": "CosyVoice2",
              "audio": "audio/five-speed-sweep/cosyvoice2.wav",
              "duration": 4.32,
              "durationControlled": false,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "voicestar",
              "label": "VoiceStar",
              "audio": "audio/five-speed-sweep/voicestar_0.75.wav",
              "duration": 4.18,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursCosyVoice2",
              "label": "Ours (CosyVoice2)",
              "audio": "audio/five-speed-sweep/ours_cosyvoice2_0.75.wav",
              "duration": 4.16,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            },
            {
              "id": "oursQwen3TTS",
              "label": "Ours (Qwen3-TTS)",
              "audio": "audio/five-speed-sweep/ours_qwen3tts_0.75.wav",
              "duration": 4.16,
              "durationControlled": true,
              "transcript": "After two or three months of trying, he was forced to admit defeat.",
              "substitutions": 0,
              "deletions": 0,
              "insertions": 0,
              "exact": true
            }
          ]
        }
      ]
    }
  ]
};
