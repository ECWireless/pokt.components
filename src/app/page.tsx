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

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Pocket Network UI</h1>
        <p className="text-lg text-muted-foreground">
          A Pocket Network themed UI component library built with TypeScript, Tailwind, and shadcn
        </p>
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
