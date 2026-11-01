export const privacy = {
  title: 'Privacy',
  updated: 'Updated 2 November 2026.',
  intro:
    'Nihongoes is a Japanese study site. This page explains the Google user data the site requests and what happens to it. On the Google consent screen the app is named nihongoes.',
  google: {
    title: 'Google data we access',
    body: 'When you choose Sign in with Google on the flashcards page, Nihongoes asks for one permission: https://www.googleapis.com/auth/drive.appdata. That scope lets the site read and write only files it created in a hidden app-data folder in your Google Drive. Nihongoes cannot see the rest of your Drive, your Gmail, your contacts, or your other files.'
  },
  file: {
    title: 'What is stored',
    body: 'The site keeps your flashcard collections in one file named nihongoes-flashcards.json. The file holds the collections you create and any edits you make to the built-in collections. It does not hold your Google password.'
  },
  use: {
    title: 'How we use it',
    body: 'The file is used only to show, create, rename, and delete your flashcard collections inside Nihongoes. We do not use it for advertising. We do not sell it or share it with anyone else.'
  },
  storage: {
    title: 'Where it lives',
    body: 'The file stays in your Google Drive. The browser talks to Google directly. Nihongoes does not run a server that stores a copy. The sign-in token stays in the browser memory for that visit and is not written to localStorage.'
  },
  limited: {
    title: 'Limited use',
    body: 'Use of Google user data follows the Google API Services User Data Policy, including the Limited Use requirements. Nihongoes uses this data only to provide the flashcard feature you see in the app. We do not transfer it except to Google, as needed to read and write that file. People do not read it. We do not use it for ads or to assess creditworthiness.'
  },
  delete: {
    title: 'Disconnect and delete',
    body: 'Delete a collection in Nihongoes and that change is written to the file. To disconnect the site, open your Google Account, go to Third-party apps and services, select nihongoes, and remove access: https://myaccount.google.com/permissions. Google deletes the hidden app-data folder when the app is removed from your account.'
  },
  other: {
    title: 'Data that does not come from Google',
    body: 'Choices such as Word first or Meaning first, the site language, and furigana stay in this browser. They are not sent to Google Drive.'
  },
  contact: {
    title: 'Contact',
    body: 'Questions about this page or your flashcard file: chtam106@gmail.com.'
  }
};
