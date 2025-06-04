export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 bg-gray-900 text-white font-sans">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Bruno Henrique</h1>
        <p className="text-purple-400">
          Desenvolvedor Web | Gestão de Redes Sociais | Gamer Enthusiast
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Contato
        </h2>
        <p>📍 Nova Cruz -- Alexandria, Rio Grande do Norte</p>
        <p>
          📧{" "}
          <a
            href="mailto:brunoh.rodrigues27@gmail.com"
            className="text-purple-400 hover:underline"
          >
            brunoh.rodrigues27@gmail.com
          </a>
        </p>
        <p>
          📞{" "}
          <a
            href="tel:+5584998152063"
            className="text-purple-400 hover:underline"
          >
            (84) 99815-2063
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/bruno-henrique-b3a5672b8/"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/Bruno
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://github.com/brunohro/"
            className="text-blue-400 hover:underline"
          >
            github.com/brunohro/
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Sobre Mim
        </h2>
        <p>
          Estou mergulhado no universo da programação e desenvolvimento, sempre
          em busca de crescer e aprender mais. Acredito que a tecnologia tem o
          poder de transformar vidas, e estou determinado a fazer parte dessa
          mudança.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Formação
        </h2>
        <p>
          <strong>Técnico em Informática</strong> - IFRN-PDF (Conclusão: 2024)
        </p>
        <img
          src="https://via.placeholder.com/200x100"
          alt="Certificado"
          className="mt-4 rounded shadow-lg"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Projetos
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Sistema de folha de pagamento</strong>
          </li>
          <li>
            <strong>Projeto de Bot WhatsApp</strong> - Desenvolvimento de um bot
            para auxiliar nos estudos do ENEM.
          </li>
          <li>
            <strong>E-commerce</strong> - Criação de uma plataforma de vendas
            online.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Habilidades
        </h2>
        <ul className="list-none space-y-1">
          <li>✅ HTML, CSS, JavaScript</li>
          <li>✅ C# & ASP.NET</li>
          <li>✅ Git & GitHub</li>
          <li>✅ Python, Django</li>
          <li>✅ Next.js</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Gestão de Redes Sociais
        </h2>
        <p className="mb-2">
          Além do desenvolvimento web, também trabalho com a gestão de redes
          sociais, criação de conteúdo e estratégias para aumentar o
          engajamento.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>📢 Marketing Digital</li>
          <li>📊 Análise de Engajamento</li>
          <li>🎨 Design de Posts</li>
          <li>📱 Gestão de Instagram</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
          Certificados
        </h2>
        <div className="flex space-x-4">
          <img
            src="https://via.placeholder.com/150x100"
            alt="Certificado ASP.NET"
            className="rounded shadow-lg"
          />
          <img
            src="https://via.placeholder.com/150x100"
            alt="Certificado C#"
            className="rounded shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
