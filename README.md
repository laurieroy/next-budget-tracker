# Budget Tracker

This is a budget tracker 

## Tech Stack
- React 18 with Next@14
- Auth: [clerk](https://clerk.com/docs/quickstarts/nextjs) 5
- UI 
  - CSS: Tailwind
  - Component library: shadcn-ui + lucide react icons
  - next-theme for light/dark mode 
- DB: prisma 5.14.0

## Getting Started

First, clone the repo:

```bash
git clone TBD
```

Install dependencies:

```bash
pnpm install
```

Add your API key to .env.local (create in the root dir, can copy .env.sample). See clerk docs

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




### Set up Prisma db [documentation](https://pris.ly/d/getting-started)

Execute the following commands to add prisma and the [client](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices) to the project:

```bash
pnpm i prisma -D 

pnpm i @prisma/client
```

Initialize the db: (this creates the schema at prisma/schema.prisma)

```bash
pnpx prisma init
```

- Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started

- Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.

- Run `prisma db pull` to turn your database schema into a Prisma schema.

- Run `prisma generate` to generate the Prisma Client. You can then start querying your database.

- Migrate schema: `pnpx prisma migrate dev` where dev is what you named the db

- To view schema in studio:
`pnpx prisma studio`

