"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const providerMap = {
  discord: { id: "discord", name: "Discord" },
  google: { id: "google", name: "Google" },
  twitch: { id: "twitch", name: "Twitch" },
};

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (providerId: string) => {
    try {
      const result = await signIn(providerId, { callbackUrl: "/" });
      if (!result?.ok && result?.error) {
        setError(result.error);
        console.error("AuthError:", result.error);
      }
    } catch (e) {
      console.error("Sign-in error:", e);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/HWpic1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="flex flex-col gap-2 mt-10">
          {Object.values(providerMap).map((provider) => (
            <button
              key={provider.id}
              onClick={() => handleSignIn(provider.id)}
              className="buttonStyle hover"
            >
              <span>Sign in with {provider.name}</span>
            </button>
          ))}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
}
