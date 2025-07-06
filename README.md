
# Guia de Boas Práticas para Desenvolvimento Colaborativo em React

## 1. Controle de Versão
- Utilize o Git para versionamento do código.
- Cada desenvolvedor deve criar uma branch para suas tarefas (ex: `feature/Header`).

## 2. Estrutura e Nomeação
- Componentes e pastas de componentes em PascalCase (ex: `UserProfile/`, `UserProfile.jsx`).
- Arquivos de estilos podem seguir o nome do componente (ex: `UserProfile.module.css`).

## 3. Fluxo de Trabalho
- Antes de iniciar, atualize sua branch local com a principal (`develop`).
  
  Comandos recomendados para atualizar sua branch feature com a develop:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout sua-feature
  git merge develop
  # Resolva conflitos se houver, depois:
  git add .
  git commit -m "Resolve conflitos com develop"
  git push origin sua-feature
  ```
- Ao finalizar um componente, abra um Pull Request (PR) para revisão.
- Realize revisões de código em todos os PRs.
- Resolva conflitos em conjunto, se necessário.

## 4. Comunicação
- Mantenha uma lista clara de responsáveis por cada componente.
- Comunique mudanças importantes ao time.

## 5. Boas Práticas de Código
- Escreva código limpo, com nomes descritivos.
- Evite duplicidade de código.
- Utilize comentários apenas quando necessário para explicar regras de negócio.

## 6. Organização dos Componentes
Exemplo de estrutura:
```
src/
  components/
    Header/
      Header.jsx
      Header.module.css
    UserProfile/
      UserProfile.jsx
      UserProfile.module.css
```

---
Siga este guia para garantir um desenvolvimento colaborativo eficiente e organizado!

## Como criar um Pull Request (PR) da sua branch de feature para develop

1. Certifique-se de que sua branch de feature está atualizada com a develop:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout sua-feature
   git merge develop
   # Resolva conflitos se houver, depois:
   git add .
   git commit -m "Resolve conflitos com develop"
   git push origin sua-feature
   ```

2. No GitHub:
   - Acesse o repositório do projeto.
   - Clique em "Compare & pull request" ou "New pull request".
   - Selecione como base a branch `develop` e compare com a sua branch de feature.
   - Preencha o título e a descrição do PR.
   - Clique em "Create pull request".

3. Aguarde a revisão e aprovação do PR pelo time.
