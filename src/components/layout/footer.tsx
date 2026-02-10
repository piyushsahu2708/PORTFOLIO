const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Portfolio Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
