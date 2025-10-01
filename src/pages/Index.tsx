const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <h1 className="mb-4 text-4xl font-bold">Move On - Static HTML Website</h1>
        <p className="text-xl text-muted-foreground mb-8">Your static HTML pages are ready! Click below to view them:</p>
        <div className="flex flex-col gap-4">
          <a 
            href="/homepage.html" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View Homepage
          </a>
          <a 
            href="/about.html" 
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View About Page
          </a>
          <a 
            href="/quiz.html" 
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View Quiz Page
          </a>
          <a 
            href="/signup.html" 
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View Sign Up Page
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          All files are located in the public folder with separate HTML, CSS, and JS files.
        </p>
      </div>
    </div>
  );
};

export default Index;
