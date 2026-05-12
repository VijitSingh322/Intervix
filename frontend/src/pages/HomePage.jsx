import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
import react from "react";

function HomePage() {

  return (<div>
    
    <button 
    className="btn btn-secondary" 
        onClick={() => toast.error("This is a success toast")}
    >Click me
    </button>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
  </div>
  );
  }

export default HomePage;