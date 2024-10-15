import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function Header() {
  const [language, setLanguage] = useState('es')

  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">UnionLink</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Derechos Laborales</a></li>
            <li><a href="#" className="hover:underline">Sindicatos</a></li>
            <li><a href="#" className="hover:underline">Recursos</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Select
            value={language}
            onValueChange={setLanguage}
            options={[
              { value: 'es', label: 'Español' },
              { value: 'en', label: 'English' },
              { value: 'no', label: 'Norsk' },
            ]}
          />
          <Button variant="secondary">Iniciar Sesión</Button>
        </div>
      </div>
    </header>
  )
}
