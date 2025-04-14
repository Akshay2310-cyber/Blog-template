import { buildConfig } from 'payload/config';
import path from 'path';

// Import your collections
import Users from './cms/collections/Users';
import Media from './cms/collections/Media';
import Blogs from './cms/collections/Blogs';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Blogs,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
});