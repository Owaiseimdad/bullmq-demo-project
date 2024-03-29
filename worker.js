const { Worker } = require("bullmq");
const worker = new Worker(
  "email-queue",
  async (job) => {
    const v1 = await job.data;
    console.log(v1);
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);

worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
