/* eslint-disable react/jsx-no-comment-textnodes */
import { Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 sm:hidden">
            <span className="text-muted-foreground">// </span>
            <span className="text-primary">jul</span>
            <span className="text-muted-foreground">_dev</span>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/M-Julius"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/jull"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/jul.dev"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">jul</span>dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
