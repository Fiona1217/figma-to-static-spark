const Index = () => {
  // Redirect to homepage immediately
  if (typeof window !== 'undefined') {
    window.location.href = '/homepage.html';
  }
  
  return null;
};

export default Index;
