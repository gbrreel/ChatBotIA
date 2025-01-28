import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../src/components/ui/card';

export default function Home() {
  return (

    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className='w-[440px] h-[700px]'>
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mensagens</p>
        </CardContent>
        <CardFooter>
          Form  
        </CardFooter>
      </Card>
    </div>

  );
}