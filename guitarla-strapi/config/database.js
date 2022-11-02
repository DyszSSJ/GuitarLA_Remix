module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccpphvun6mporokpmvfg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_xi81'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Ef15dKC7LHNmgn1gfThW2mOuAPAKVuci'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
