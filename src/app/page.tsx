"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Code } from "@/components/ui/code";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

type PackageManager = "npm" | "bun" | "pnpm" | "yarn";

export default function Home() {
  const [command, setCommand] = useState<PackageManager>("npm");

  const baseUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.location.origin;
  }, []);

  const shadcnCli = {
    npm: "npx shadcn-ui@latest",
    bun: "bunx --bun shadcn@latest",
    pnpm: "pnpm dlx shadcn-ui@latest",
    yarn: "yarn dlx shadcn-ui@latest",
  };

  function toShadcnCliCommands(command: string) {
    return Object.fromEntries(
      Object.entries(shadcnCli).map(([key, value]) => [key, `${value} ${command}`])
    ) as Record<PackageManager, string>;
  }

  function getHeight(width: number) {
    return width * (46/47)
  }

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <div className="flex justify-end mb-8">
          <Link href="https://github.com/pokt-network/pokt-ui" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="cursor-pointer">
              <div className="flex items-center gap-2">
                View Repo
                <Image src="/github.svg" alt="GitHub" width={16} height={16} />
              </div>
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Pocket Network UI</h1>
        <p className="text-lg text-muted-foreground">
          A Pocket Network themed UI component library built with TypeScript, Tailwind, and shadcn
        </p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <p className="text-sm text-muted-foreground">
            Built with
          </p>
          <svg width="16" height={getHeight(16)} viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.8866 0.916574C43.3994 1.37209 41.9122 1.84513 40.425 2.30065C39.4047 2.616 38.3844 2.91384 37.3814 3.28176C37.0355 3.4044 36.6723 3.61464 36.4129 3.87744C32.2971 8.02965 28.1986 12.1819 24.0828 16.3516C23.6159 16.8246 23.6159 16.8246 23.149 16.3516C22.0249 15.2128 20.8836 14.0565 19.7595 12.9177C16.664 9.81668 13.5858 6.69814 10.4903 3.61464C10.2655 3.38688 9.90237 3.24672 9.5911 3.1416C7.36027 2.42329 5.11214 1.72249 2.86402 1.02169C2.67379 0.969133 2.48357 0.934093 2.18958 0.864014C2.3971 1.56481 2.58733 2.17801 2.77755 2.7912C3.36552 4.71839 3.9535 6.62806 4.57605 8.55525C4.67981 8.87061 4.87003 9.18597 5.11214 9.43125C9.26252 13.6535 13.4129 17.8583 17.5806 22.0806C18.0302 22.5361 18.0302 22.5361 17.5806 22.9916C15.6091 24.9889 13.6204 27.0037 11.649 29.001C11.234 29.4215 11.1129 29.4039 10.8881 28.8783C10.1445 27.1964 9.64297 25.462 9.64297 23.6048C9.64297 23.2019 9.50463 23.0267 9.08959 23.0267C8.38057 23.0442 7.67154 23.0267 6.97981 23.0267C6.73771 23.0267 6.53019 23.0793 6.56478 23.3771C6.66854 24.3932 6.72041 25.4094 6.91064 26.408C7.39485 28.7907 8.32869 30.9982 9.79861 32.943C10.0753 33.3109 10.0407 33.5386 9.72944 33.854C6.73771 36.8499 3.76327 39.8808 0.788826 42.8943C0.321907 43.3673 0.339199 43.4023 0.82341 43.8403C1.42868 44.4185 2.01665 45.0142 2.58733 45.6449C3.00237 46.1004 3.03695 46.1179 3.46928 45.6974C6.44373 42.684 9.41816 39.6706 12.3926 36.6572C12.8595 36.1841 12.8595 36.1841 13.4129 36.5871C15.661 38.1989 18.1513 39.1976 20.9009 39.5655C21.437 39.6356 21.9904 39.6356 22.5437 39.6706C22.9069 39.7056 23.0798 39.5655 23.0625 39.18C23.0453 38.4968 23.0453 37.8135 23.0625 37.1302C23.0625 36.7623 22.9242 36.6221 22.5437 36.6046C20.728 36.5871 19.0159 36.1316 17.3731 35.3607C17.2174 35.2906 17.0791 35.1855 16.8889 35.0804C17.0272 34.9052 17.131 34.765 17.252 34.6424C19.258 32.6101 21.264 30.5778 23.2701 28.5279C23.5641 28.2301 23.7197 28.2651 23.9964 28.5455C25.9851 30.5778 27.9911 32.5926 29.9798 34.6249C30.3949 35.0453 30.3776 35.0804 29.8588 35.3432C28.1814 36.1666 26.3829 36.5521 24.5325 36.6922C24.1693 36.7097 24.0137 36.8674 24.031 37.2353C24.0483 37.9011 24.0483 38.5844 24.031 39.2501C24.0137 39.6706 24.2212 39.7932 24.5844 39.7757C27.9911 39.6005 31.1039 38.5844 33.8708 36.517C34.3896 36.1316 34.3896 36.1316 34.822 36.5696C37.7791 39.5655 40.7363 42.5614 43.6934 45.5573C44.1776 46.0478 44.1603 46.0303 44.6618 45.5573C44.7483 45.4697 44.8521 45.3821 44.9558 45.2945C45.2152 45.0317 46.6333 43.8403 46.9272 43.3673C46.91 43.3498 44.9039 41.3175 44.8866 41.2999C42.3618 38.7596 39.8543 36.2017 37.3295 33.6613C37.1047 33.451 37.122 33.2583 37.3122 33.013C38.4535 31.5589 39.2317 29.8945 39.7851 28.1425C40.252 26.6884 40.4942 25.1992 40.546 23.6749C40.5633 23.2545 40.4077 23.1143 39.9926 23.1143C39.3528 23.1318 38.6957 23.1318 38.0558 23.1143C37.6754 23.0968 37.5197 23.2194 37.5024 23.6224C37.4332 25.4269 37.0182 27.1439 36.2746 28.7732C36.0325 29.2988 35.9806 29.3163 35.5656 28.8959C33.6114 26.9336 31.6746 24.9539 29.7205 22.9741C29.2535 22.5011 29.2535 22.5011 29.7032 22.0281C33.8535 17.8233 38.0039 13.636 42.137 9.43125C42.3099 9.25605 42.5002 9.02829 42.5693 8.80053C43.0708 7.25878 43.5205 5.71703 44.0047 4.17528C44.316 3.19416 44.6272 2.19553 44.9212 1.21441C44.8866 1.09177 44.8866 1.00417 44.8866 0.916574ZM41.9814 4.99871C42.016 5.01623 42.0505 5.05127 42.0851 5.06879C41.7566 6.10247 41.4453 7.15366 41.0994 8.18733C41.0302 8.39757 40.84 8.57277 40.6844 8.73045C38.1941 11.2183 35.7039 13.7061 33.231 16.1939C27.5069 21.9755 21.8001 27.7746 16.0761 33.5562C15.3498 34.292 15.3325 34.292 14.5716 33.5737C14.1392 33.1532 14.1392 33.1532 14.5543 32.7327C23.5813 23.6048 32.6084 14.4595 41.6355 5.31407C41.7393 5.19143 41.8603 5.10383 41.9814 4.99871ZM40.8054 3.80736C40.84 3.85992 40.8919 3.91248 40.9265 3.96504C40.7708 4.07016 40.5979 4.15776 40.4769 4.29791C31.5535 13.3207 22.6475 22.3434 13.7415 31.3837C12.8768 32.2597 13.0843 32.1546 12.3061 31.261C12.0467 30.9632 12.0467 30.7179 12.358 30.4201C20.6934 21.9755 29.0287 13.5309 37.3641 5.08631C37.4851 4.96367 37.6235 4.82351 37.7791 4.77095C38.7821 4.43807 39.7851 4.12272 40.8054 3.80736ZM6.28808 3.85992C6.32267 3.82488 6.33996 3.78984 6.37455 3.73728C7.2565 4.0176 8.15575 4.29791 9.03771 4.59575C9.29711 4.68335 9.55651 4.84103 9.76403 5.03375C13.7761 9.06333 17.7708 13.0929 21.7828 17.1225C22.561 17.9109 22.561 17.9109 21.7656 18.7168C21.3678 19.1198 21.3332 19.1198 20.9355 18.7168C16.1625 13.8813 11.3896 9.04581 6.59936 4.1928C6.47831 4.08768 6.37455 3.96504 6.28808 3.85992ZM5.07755 5.06879C5.11214 5.03375 5.14672 5.01623 5.16402 4.98119C5.30236 5.10383 5.42342 5.22647 5.56176 5.34911C8.53621 8.36253 11.5106 11.3935 14.4851 14.3894C16.2836 16.1939 18.0821 17.9985 19.8979 19.803C20.1919 20.0833 20.2437 20.2936 19.9152 20.5739C19.7422 20.7141 19.5866 20.8717 19.4483 21.0294C19.1716 21.3623 18.964 21.3097 18.6701 21.0294C14.5543 16.8597 10.4385 12.6899 6.32267 8.52021C6.18432 8.38005 6.04597 8.20485 5.9768 8.02965C5.68282 7.03102 5.38883 6.04991 5.07755 5.06879ZM24.7227 27.0738C24.8265 26.9336 24.9129 26.7935 25.0167 26.6884C25.8468 25.8649 25.7084 25.6897 26.6595 26.6708C28.5099 28.5455 30.3603 30.4201 32.2107 32.2947C33.0926 33.1882 33.0753 33.1707 32.055 33.9241C31.7611 34.1343 31.5708 34.0993 31.346 33.854C29.2189 31.699 27.0919 29.5441 24.9648 27.3891C24.8956 27.3015 24.8265 27.1964 24.7227 27.0738ZM27.0054 24.7787C27.0746 24.6736 27.1265 24.586 27.1956 24.5159C27.3686 24.3407 27.5415 24.1655 27.7144 23.9903C28.1122 23.5873 28.1295 23.5873 28.5445 24.0078C30.4986 25.9876 32.4355 27.9498 34.3896 29.9295C35.2024 30.753 35.2024 30.9106 34.3723 31.7341C34.1475 31.9618 33.9746 31.9443 33.7498 31.7341C31.5881 29.5441 29.4265 27.3541 27.2648 25.1641C27.161 25.0415 27.0919 24.9013 27.0054 24.7787Z" fill="#FF3864"/>
          </svg>
          <p className="text-sm text-muted-foreground">
            by <Link href="https://raidguild.org" className="underline" target="_blank" rel="noopener noreferrer">RaidGuild</Link>
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        {/* Installation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Add shadcn</CardTitle>
              <CardDescription>Follow the official shadcn installation guide</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">First, follow the installation instructions from the official shadcn documentation:</p>
              <Button asChild className="mb-4">
                <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noopener noreferrer">
                  View Installation Guide
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">Once you&apos;ve initialized shadcn in your project, return here to continue with the Pocket Network UI setup.</p>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Step 2: Add Theme</CardTitle>
              <CardDescription>Add Pocket Network&apos;s theme and components</CardDescription>
            </CardHeader>
            <CardContent>
              <Code
                code={toShadcnCliCommands(`add ${baseUrl}/r/theme.json`)}
                initialKey={command}
                onValueChange={(value) => setCommand(value as PackageManager)}
                value={command}
              />
            </CardContent>
          </Card>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Available Components</h2>
          <div className="grid gap-4 md:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>Customizable button component</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/button.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Flexible card component</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/card.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code</CardTitle>
                <CardDescription>Code block with tabs and copy-to-clipboard</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/code.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo</CardTitle>
                <CardDescription>Pocket Network logo component</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/logo.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PoktIcon</CardTitle>
                <CardDescription>Pocket Network icon component</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/pokt-icon.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Tabbed navigation component</CardDescription>
              </CardHeader>
              <CardContent>
                <Code
                  code={toShadcnCliCommands(`add ${baseUrl}/r/tabs.json`)}
                  initialKey={command}
                  onValueChange={(value) => setCommand(value as PackageManager)}
                  value={command}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Preview Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Component Preview</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Button</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Card</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                    <CardDescription>Card description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Card with Action</CardTitle>
                    <CardDescription>With a button</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Action</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Code</h3>
              <div className="mt-6">
                <p>With tabs</p>
                <Code code={{ code1: 'Code 1 here', code2: 'Code 2 here', code3: 'Code 3 here', code4: 'Code 4 here' }} />
                <p>Without tabs</p>
                <Code code="Your code here" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Tabs</h3>
              <div className="mt-6">
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">Content for Tab 1</TabsContent>
                  <TabsContent value="tab2">Content for Tab 2</TabsContent>
                  <TabsContent value="tab3">Content for Tab 3</TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Logo</h3>
              <div className="flex flex-wrap items-start gap-8">
                <div>
                  <p className="my-4 font-semibold">Icon</p>
                  <div className="flex flex-wrap items-center gap-4 p-4 rounded-md mb-2">
                    <p>Default:</p>
                    <Logo color="default" size="xs" type="icon" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 p-4 rounded-md mb-2">
                    <p>Black:</p>
                    <Logo color="black" size="xs" type="icon" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 p-4 rounded-md bg-black mb-2">
                    <p className="text-white">White:</p>
                    <Logo color="white" size="xs" type="icon" />
                  </div>
                </div>
                <div>
                  <p className="my-4 font-semibold">Full (Default)</p>
                  <div className="flex flex-wrap items-center gap-4 p-4 rounded-md mb-2">
                    <p>Default:</p>
                    <Logo color="default" size="md" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 p-4 rounded-md mb-2">
                    <p>Black:</p>
                    <Logo color="black" size="md" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 bg-black p-4 rounded-md mb-2">
                    <p className="text-white">White:</p>
                    <Logo color="white" size="md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
