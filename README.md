# Recuperação de senha

**RF**
- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha

**RNF**
- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amozon SES para envios em produção;
- O envio de e-mail deve ser executado em segundo plano (background job);

**RN**
- O link enviado para recuperção de senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao reseta-la;

# Atualização do perfil

**RF**
- O usuário deve poder atualizar seu perfil;

**RN**
- O usuário não deve alterar seu e-mail para um ja autilizado;
- Para atualizar sua senha o usuário deve informar a antiga;
- Para atualizar sua senha o usuário deve informar a antiga;

# Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia expecificos;
- O prestador deve receber uma notificação quando houver um novo agendamento;
- O prestador deve poder vizualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**
- As notificações devem ter um status de lida / não lida;

# Agendamento de serviços

**RF**
- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder consultar os dias de um mês com horários disponíveis de um prestador;
- O usuário deve poder listar horarios disponíveis de um dia expecifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis entre 8 hrs às 18 hrs (primeiro às 8hrs, último as 17hrs);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horario que já passou;
- O usuário não pode marcar um horário consigo mesmo;
