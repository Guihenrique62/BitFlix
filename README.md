Criar Banco de dados 
npx sequelize-cli db:create

Criar Migration
npx sequelize-cli migration:generate --name create-categories-table

Executa as Migrations 
npx sequelize-cli db:migrate

Criar seed
npx sequelize-cli seed:generate --name seed-categories-table

Executar seed
npx sequelize-cli db:seed:all