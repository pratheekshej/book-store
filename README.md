This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running Book Store Application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About Book Store

Book Store application with React-SSR - NextJS.

1. Single page with book details, the main page shows a book list with book name, price, category and a delete button at the end for each book. There is an add button at the top so the user can add a book.
2. Once you click the add a book button, a modal pops up, letting the user to add a book (name, price, category and description).
3. The book is clickable, if the user clicks the book, it will show a popup modal, letting the user modify the book name, price, category and description. After modification: the book details should be updated in the main page.
4. Once clicked delete button, the book gets deleted from the main listing page

Tools Used: Redux and Hooks (Server Side Rendering - NextJS)

