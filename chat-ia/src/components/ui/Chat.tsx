'use client'

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"
import { Input } from "./input"
import { useChat } from "ai/react"

export interface ChatProps {}

export function Chat() {

    const{} = useChat()


  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content,1fr,min-content]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
            <AvatarFallback>GG</AvatarFallback>
            {/* <AvatarImage src='https://github.com/gbrreel.png'/> */}
          </Avatar>
          <p className="leanding-relaxed">
            <span className="block font-bold text-slate-700">Humano:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non et,
            mollitia veritatis doloribus ipsa tenetur velit corporis provident
            ipsam quas! Earum nulla illo ab sit maxime eos dicta voluptatibus
            repudiandae.
          </p>
        </div>

        <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
            <AvatarFallback>IA</AvatarFallback>
            {/* <AvatarImage src='https://github.com/gbrreel.png'/> */}
          </Avatar>
          <p className="leanding-relaxed">
            <span className="block font-bold text-slate-700">Humano:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non et,
            mollitia veritatis doloribus ipsa tenetur velit corporis provident
            ipsam quas! Earum nulla illo ab sit maxime eos dicta voluptatibus
            repudiandae.
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Input placeholder="How can i help you?" />
        <Button type="submit">Send</Button>
      </CardFooter>
    </Card>
  );
}

