import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ClipboardIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function Code({ code, initialKey, className, ...props }: { code: string | { [key: string]: string }, initialKey?: string, className?: string } & React.ComponentProps<typeof Tabs>) {
  const [tab, setTab] = useState(initialKey || (typeof code !== "string" ? Object.keys(code)[0] : ""));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialKey) {
      setTab(initialKey);
    }
  }, [initialKey]);

  const tabLabels = typeof code === "string" ? [] : Object.keys(code);

  const handleCopy = async () => {
    const text = typeof code === "string" ? code : code[tab as keyof typeof code];
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Tabs className={className} defaultValue={tab} onValueChange={setTab} {...props}>
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <TabsList className="bg-transparent p-0 gap-1 h-auto">
          {tabLabels.map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              onClick={() => setTab(key)}
              className="cursor-pointer"
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value={tab} className="px-4 pb-4 flex gap-2 items-center justify-between">
        <pre
          className="font-mono text-[15px] leading-6 whitespace-pre-wrap break-words select-all text-foreground"
        >
          <code>{typeof code === "string" ? code : code[tab as keyof typeof code]}</code>
        </pre>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className={cn(
            "ml-2 cursor-pointer",
            copied && "text-green-500 hover:text-green-500"
          )}
          aria-label="Copy command"
        >
          <ClipboardIcon className="w-5 h-5" />
        </Button>
      </TabsContent>
    </Tabs>
  );
} 