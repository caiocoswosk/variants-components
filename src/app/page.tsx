import Button from '@/components/button'

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-center mt-10">Botões</h1>
      <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        <div className="flex flex-col items-center gap-2 mt-5">
          <h2 className="text-xl">Variações</h2>
          <Button variant="default">default</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="sucess">sucess</Button>
        </div>
        <div className="flex flex-col items-center gap-2 mt-5">
          <h2 className="text-xl">Tamanhos</h2>
          <Button size="sm">submit</Button>
          <Button size="default">submit</Button>
          <Button size="lg">submit</Button>
        </div>
        <div className="flex flex-col items-center gap-2 mt-5">
          <h2 className="text-xl">Arredondamentos</h2>
          <Button variant="outline" rounded="sm">
            Close
          </Button>
          <Button variant="outline" rounded="default">
            Close
          </Button>
          <Button variant="outline" rounded="lg">
            Close
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2 mt-5">
          <h2 className="text-xl">Estados</h2>
          <Button variant="destructive" pending></Button>
          <Button variant="sucess" disabled>
            disabled
          </Button>
        </div>
      </div>
    </section>
  )
}
