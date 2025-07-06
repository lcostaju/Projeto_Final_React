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

2. No GitHub (ou plataforma usada):
   - Acesse o repositório do projeto.
   - Clique em "Compare & pull request" ou "New pull request".
   - Selecione como base a branch `develop` e compare com a sua branch de feature.
   - Preencha o título e a descrição do PR.
   - Clique em "Create pull request".

3. Aguarde a revisão e aprovação do PR pelo time.
