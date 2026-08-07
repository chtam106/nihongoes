import type { Meta, StoryObj } from '@storybook/react-vite';
import { GrammarPointCard } from '@/components/grammar-point-card';

const meta = {
  title: 'Components/GrammarPointCard',
  component: GrammarPointCard,
  parameters: {
    layout: 'padded'
  },
  args: {
    index: 1,
    point: {
      pattern: 'N は N です',
      highlights: ['は', 'です'],
      title: { en: 'A is B (statement)', vi: 'A là B (câu khẳng định)' },
      explanation: {
        en: 'Use は to mark the topic and です to politely state what it is.',
        vi: 'Dùng は để đánh dấu chủ đề và です để khẳng định một cách lịch sự.'
      },
      examples: [
        {
          jp: '私は学生です。',
          romaji: 'Watashi wa gakusei desu.',
          meaning: { en: 'I am a student.', vi: 'Tôi là học sinh.' }
        },
        {
          jp: 'これは本です。',
          romaji: 'Kore wa hon desu.',
          meaning: { en: 'This is a book.', vi: 'Đây là quyển sách.' }
        }
      ]
    }
  }
} satisfies Meta<typeof GrammarPointCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RedundantTitleHidden: Story = {
  args: {
    index: 4,
    point: {
      pattern: 'どこ / どちら',
      highlights: [['どこ', 'どちら']],
      title: { en: 'どこ / どちら', vi: 'どこ / どちら' },
      explanation: {
        en: 'どこ asks where a place is. どちら is more polite and can also ask which direction or which place.',
        vi: 'どこ hỏi nơi chốn. どちら lịch sự hơn và cũng hỏi được phương hướng hoặc địa điểm.'
      },
      examples: [
        {
          jp: 'お手洗いは どこですか。',
          romaji: 'Otearai wa doko desu ka.',
          meaning: { en: 'Where is the restroom?', vi: 'Nhà vệ sinh ở đâu?' }
        }
      ]
    }
  }
};

export const MiniDialogue: Story = {
  args: {
    index: 12,
    point: {
      pattern: '～ ね',
      highlights: ['ね'],
      title: { en: "Sentence-ending ね (isn't it?)", vi: 'ね (nhỉ / đúng không ạ)' },
      explanation: {
        en: 'ね at the end seeks agreement, sympathy, or confirms what was just said.',
        vi: 'Thêm ね cuối câu để xin đồng ý, thể hiện đồng cảm, hoặc xác nhận lại — giống "nhỉ", "đúng không" trong tiếng Việt.'
      },
      examples: [
        {
          jp: '毎日 10時まで 勉強します。',
          romaji: 'Mainichi jū-ji made benkyō shimasu.',
          meaning: { en: 'I study until 10 every day.', vi: 'Hàng ngày tôi học đến 10 giờ.' },
          dialogueGroup: 'sympathy'
        },
        {
          jp: '大変ですね。',
          romaji: 'Taihen desu ne.',
          meaning: { en: "That's tough, isn't it?", vi: 'Vất vả quá nhỉ.' },
          dialogueGroup: 'sympathy'
        },
        {
          jp: '山田さんの 電話番号は 871 の 6813 です。',
          romaji: 'Yamada-san no denwa bangō wa hachihyaku nanajū no roppesen jūsan desu.',
          meaning: {
            en: "Mr. Yamada's phone number is 871-6813.",
            vi: 'Số điện thoại của anh Yamada là 871-6813.'
          },
          dialogueGroup: 'confirm'
        },
        {
          jp: '871 の 6813 ですね。',
          romaji: 'Hachihyaku nanajū no roppesen jūsan desu ne.',
          meaning: { en: '871-6813, right?', vi: '871-6813, đúng không ạ.' },
          dialogueGroup: 'confirm'
        }
      ]
    }
  }
};
