# NX / Vercel Envioronment Variables Issue

This repository demonstrates an issue whereby invocations of `vercel build` orchestrated through `nx` do not result in build artifacts that target the proper environment variables.

It consists of a 

### Initial setup

1. clone this repository
2. run `yarn`
3. globally install vercel cli 
    ```
    npm i -g vercel
    ```

4. Create a vercel project on vercel.com. 
5. Create an environment variable within the project called `NEXT_PUBLIC_ENV_SPECIFIC_URL` and set the value to something distinct from `https://localhost` which is the default defined in `.env.local`.

### To demonstrate expected behavior
Perform the following steps to invoke a build and deployment directly within the package.
```
cd package/next-app
yarn pull-production
yarn vbuild
yarn deploy
```

When navigating to the deployed site, you should see the message
```
The value of my variable is [your production value defind in Vercel dashboard]
```

### To demonstrate incorrect behavior
From the root of the repository, invoke the following commands
```
yarn nx pull-production next-app
yarn nx vbuild next-app
yarn nx deploy next-app
```

The application will deploy as before. However, the rendered message will display

```
The value of my variable is https://localhost
```

Which is the value defined in `.env.local`