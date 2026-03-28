import Logo from "@/components/localComponents/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl shadow-xl p-8 space-y-8">
        {/* Brand */}
        <div className="flex flex-col items-center space-y-4">
          <Logo />

          <div className="text-center space-y-1">
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              BC Castings CMS
            </h1>
            <p className="text-sm text-neutral-400">
              Talent &amp; Recruiter Management Portal
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-white">
              Sign in to continue
            </h2>
            <p className="text-sm text-neutral-400">
              Enter your registered email address to receive a one-time
              verification code.
            </p>
          </div>

          <div className="space-y-4">
            <Input type="email" placeholder="Email address" />

            <Link href={"/home"}>
              <Button
                variant="accent"
                size="lg"
                className="w-full bg-[#B8962E] hover:bg-[#D4AF37] text-black font-semibold transition-colors"
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-3 text-center">
          <p className="text-xs text-neutral-500">
            One-time passwords are sent only to verified users.
          </p>

          <p className="text-[11px] text-neutral-600">
            © {new Date().getFullYear()} BC Castings CMS
          </p>
        </div>
      </div>
    </div>
  );
}
