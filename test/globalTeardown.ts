export default async () => {
  if ((global as any).teardown) {
    const { db } = (global as any).integrationUtils;

    console.log("Shutting down database connection ...");
    db.destroy((error: Error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("database connection closed!");
      }
    });
  }
};
