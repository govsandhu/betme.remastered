import App from './app';

function run(): void {
  const port = process.env.PORT || 3000;

  try {
    App.listen(port, () => console.log(`BetMe express server is listening on port ${port}`));
  } catch (e) {
    console.log('Unable to start app');
  }
}

run();