export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {}
      },
      security: {
        allowedTypes: [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/svg+xml",
          "video/mp4",
        ],
        deniedTypes: [],
      },
    },
  },
});