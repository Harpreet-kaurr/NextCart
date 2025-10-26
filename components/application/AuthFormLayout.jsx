// components/auth/AuthFormLayout.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/assets/images/logo-black.png";
import Heading from "@/components/application/Heading";

export default function AuthFormLayout({ title, subTitle, children }) {
  return (
    <Card className="w-[400px]">
      <CardContent>
        <div className="flex justify-center">
          <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="Logo" className="max-w-[150px]" />
        </div>

        <Heading title={title} subTitle={subTitle} />

        <div className="mt-5">{children}</div>
      </CardContent>
    </Card>
  );
}
