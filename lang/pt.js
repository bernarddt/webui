var lang = [
	  "Ficheiros Torrent||*.torrent||Todos os ficheiros (*.*)||*.*||"
	, "OK"
	, "Cancelar"
	, "Aplicar"
	, "Preferências"
	, "Idioma"
	, "Idioma:"
	, "Privacidade"
	, "Procurar actualizações automaticamente"
	, "Actualização para versões beta"
	, "Enviar informação anónima ao procurar actualizações"
	, "Ao Transferir"
	, "Adicionar .!ut aos ficheiros imcompletos"
	, "Pré-alocar todos os ficheiros"
	, "Prevenir suspensão se existirem torrents activos"
	, "Opções de Visualização"
	, "Confirmar ao apagar torrents"
	, "Confirmar ao apagar trackers"
	, "Mostrar diálogo de conf. ao sair"
	, "Alternar a cor de fundo da lista"
	, "Mostrar vel. actual na barra de estado"
	, "Mostrar lim. de vel. na barra de estado"
	, "Ao Adicionar Torrents"
	, "Não iniciar a transf. automaticamente"
	, "Activar a janela do programa"
	, "Mostrar uma janela que mostre os ficheiros dentro do torrent"
	, "Acções para Duplo Clique"
	, "Para torrents em envio:"
	, "Para torrents em recepção:"
	, "Localização dos Ficheiros Recebidos"
	, "Colocar novos downloads em:"
	, "Mostrar sempre diálogo ao adicionar manualmente"
	, "Mover downloads completos para:"
	, "Adicionar a descrição do torrent"
	, "Apenas mover do directório padrão de download"
	, "Localização dos .torrents"
	, "Guardar .torrents em:"
	, "Mover .torrents de tarefas terminadas para:"
	, "Carregar .torrents automat. de:"
	, "Apagar .torrents carregados"
	, "Porta de Escuta"
	, "Porta utilzada para ligações de entrada:"
	, "Porta ao acaso"
	, "Escolher porta ao acaso ao iniciar"
	, "Activar map. de portas UPnP"
	, "Activar map. de portas NAT-PMP"
	, "Servidor Proxy"
	, "Tipo:"
	, "Proxy:"
	, "Porta:"
	, "Autenticação"
	, "Nome de Utilizador:"
	, "Password:"
	, "Procurar nomes de host através de proxy"
	, "Utilizar servidor proxy para ligações peer-to-peer"
	, "Adic. excep. à Firewall do Windows"
	, "Privacidade de Proxy"
	, "Desactivar toda a procura em DNS locais"
	, "Desactivar opções que deixam sair informação que o identifiquem"
	, "Desactivar ligações não suportadas pela proxy"
	, "Limite Global de Velocidade de Envio"
	, "Vel. máxima de envio (kB/s): [0: ilimitado]"
	, "Automático"
	, "Vel. de envio altern. quando não há downloads (kB/s):"
	, "Limite Global de Velocidade de Recepção"
	, "Vel. máx. de recepção (kB/s): [0: ilimitado]"
	, "Número de Ligações"
	, "Número máximo global de ligações:"
	, "Número máximo de peers ligados por torrent:"
	, "Número de slots de envio por torrent:"
	, "Usar slots adicionais se a vel. de upload for < 90%"
	, "Global Rate Limit Options"
	, "Aplicar limites ao overhead de transport"
	, "Aplicar limites a ligações uTP"
	, "Características Básicas do BitTorrent"
	, "Activar Rede DHT"
	, "Pedir inf. de scrape ao tracker"
	, "Activar DHT para torrents novos"
	, "Activar Troca de Peers"
	, "Ligar Descoberta de Peers Locais"
	, "Limitar larg. de banda dos peers locais"
	, "IP/Nome de host a relatar ao tracker:"
	, "Encriptação de Protocolo"
	, "Envio:"
	, "Permitir ligações de entrada antigas"
	, "Activar gestão de largura de banda [uTP]"
	, "Activar suporte a tracker UDP"
	, "Ligar Limite de Transferência"
	, "Opções de Limite"
	, "Tipo de Limite:"
	, "Limite de Largura de Banda:"
	, "Período de tempo (dias):"
	, "Histórico de uso por período seleccionado:"
	, "Enviado:"
	, "Transferido"
	, "Enviado + Transferido:"
	, "Periodo de tempo:"
	, "Últimos %dias"
	, "Apagar Histórico"
	, "Definições de Fila"
	, "Número máximo de torrents activos (envio ou recepção):"
	, "Número máximo de downloads activos:"
	, "Enviar Enquanto [Valores padrão]"
	, "Rácio Mínimo (%):"
	, "Tempo mínimo de seed (minutos)"
	, "Tarefas de envio têm prioridade mais alta que as tarefas de recepção"
	, "Quando o µTorrent Atingir o Objectivo de Envio"
	, "Limitar a vel. de envio a (kB/s): [0: parar]"
	, "Activar Agendador de Tarefas"
	, "Tabela do Agendador"
	, "Definições do Agendador de Tarefas"
	, "Vel.de envio limitada (kB/s):"
	, "Vel. de recepção limitada (kB/s):"
	, "Desactivar DHT ao desligar"
	, "Activar Web UI"
	, "Autenticação"
	, "Nome"
	, "Password"
	, "Activar Conta de convidado com nome:"
	, "Conectividade"
	, "Porta de escuta alternativa (padrão é a porta de ligação):"
	, "Restringir acesso aos seguintes IPs (Separar entradas com uma vírgula):"
	, "Opções avançadas [CUIDADO: Não modifique!]"
	, "Valor:"
	, "Verdadeiro"
	, "Falso"
	, "Definir"
	, "Lista popup de Velocidade [Separe valores com uma vírgula]"
	, "Ignorar lista popup automática de velocidade"
	, "Lista de vel. de envio:"
	, "Lista de vel. de recepção:"
	, "Descrições Persistentes [Separe descrições com o caracter | ]"
	, "Motores de Busca [Formato: nome|URL]"
	, "Definições Básicas da Cache"
	, "A cache do disco é usada para manter os dados acedidos mais frequentemente em memória para reduzir o número de acessos ao disco. O µTorrent normalmente gere a cache automaticamente, mas pode alterar isso modificando estas definições."
	, "Ignorar o tam. autom. da cache e especificá-lo manualmente (MB):"
	, "Reduzir a utilização da memória quando a cache não é necessária"
	, "Definições Avançadas de Cache"
	, "Activar cache para escritas no disco"
	, "Escrever blocos não utilizados todos os 2 minutos"
	, "Escrever partes terminadas imediatamente"
	, "Ligar a cache para leituras do disco"
	, "Desl. a cache de leitura se a vel. de envio estiver lenta"
	, "Remover blocos antigos da cache"
	, "Aumentar o tamanho automático da cache quando esta está cheia"
	, "Desligar o caching do Windows para escritas"
	, "Desligar o caching do Windows para leituras"
	, "Correr Programa"
	, "Correr este programa quando um torrent acaba:"
	, "Correr este programa quando um torrent muda de estado:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Propriedades do Torrent"
	, "Trackers (separar filas com uma linha vazia)"
	, "Definições de Largura de Banda"
	, "Vel. máx. de envio (kB/s): [0: por defeito]"
	, "Vel. máx. de recepção (kB/s): [0: por defeito]"
	, "Número de slots de envio: [0: por defeito]"
	, "Enviar Enquanto"
	, "Ignorar definições padrão"
	, "Taxa mínima (%):"
	, "Tempo mínimo de envio (minutos):"
	, "Outras Definições"
	, "Seeding Inicial"
	, "Activar DHT"
	, "Troca de Peers"
	, "IP"
	, "Porta"
	, "Cliente"
	, "Flags"
	, "%"
	, "Relevância"
	, "Vel. de Recepção"
	, "Vel. de Envio"
	, "Pedidos"
	, "Esperou"
	, "Enviado"
	, "Recebido"
	, "Hasherr"
	, "Dl. do Peer"
	, "EnvMax"
	, "RecMax"
	, "Na fila"
	, "Inactivo"
	, "Realizado"
	, "Nome"
	, "%"
	, "Prioridade"
	, "Tamanho"
	, "saltar"
	, "baixa"
	, "normal"
	, "alta"
	, "Recebido:"
	, "Enviado:"
	, "Seeds:"
	, "Restante:"
	, "Vel. Recepção:"
	, "Veloc. Envio:"
	, "Peers:"
	, "Rácio de Part.:"
	, "Hash:"
	, "Transferência"
	, "%d de %d ligados (%d no swarm)"
	, "R:%s E:%s - %s"
	, "Reset"
	, "Ilimitado"
	, "Resolver IPs"
	, "Get File(s)"
	, "Não Transferir"
	, "Prioridade Alta"
	, "Prioridade Baixa"
	, "Prioridade Normal"
	, "Eliminar Dados"
	, "Eliminar .torrent"
	, "Eliminar .torrent + Dados"
	, "Forçar Verificação"
	, "Forçar Início"
	, "Descrição"
	, "Pausa"
	, "Propriedades"
	, "Mover Fila Rec"
	, "Mover Fila Env"
	, "Remover"
	, "Remover E"
	, "Iniciar"
	, "Parar"
	, "Activo"
	, "Todos"
	, "Completo"
	, "A transferir"
	, "Inactivo"
	, "Sem Descrição"
	, "||Disp.||Disponibilidade"
	, "Realizado"
	, "Recebido"
	, "Veloc. de Recepção"
	, "Tempo Rest."
	, "Descrição"
	, "Nome"
	, "#"
	, "Peers"
	, "Restante"
	, "Seeds"
	, "Seeds/Peers"
	, "Ratio"
	, "Tamanho"
	, "Estado"
	, "Enviado"
	, "Veloc. de Envio"
	, "Tem a certeza que deseja remover os %d torrents seleccionados e toda a informação associada?"
	, "Tem a certeza que deseja remover o torrent seleccionado e toda a informação associada?"
	, "Tem a certeza que deseja remover os %d torrents seleccionados?"
	, "Tem a certeza que deseja remover o torrent selccionado?"
	, "Verificado: %:.1d%%"
	, "A transferir"
	, "Erro: %s"
	, "Concluído"
	, "Pausado"
	, "Na fila"
	, "Seed na fila"
	, "A enviar"
	, "Parado"
	, "Adicionar Descrição"
	, "Introduza a nova descrição para o torrent selecionado:"
	, "Nova descrição..."
	, "Remover Descrição"
	, "Geral||Trackers||Peers||Partes||Ficheiros||Velocidade||Registo||"
	, "Adicinar Torrent"
	, "Adicinar Torrent do URL"
	, "Pausa"
	, "Preferências"
	, "Mover Fila Rec"
	, "Mover Fila Env"
	, "Remover"
	, "Iniciar"
	, "Parar"
	, "Ficheiro"
	, "Adicionar Torrent..."
	, "Adicionar Torrent do URL..."
	, "Opções"
	, "Preferências"
	, "Mostrar Lista de Categorias"
	, "Mostrar Informações Detalhadas"
	, "Mostrar Barra de Estado"
	, "Mostrar Barra de Ferramentas"
	, "Icones nas Abas"
	, "Ajuda"
	, "Página do µTorrent"
	, "Fóruns do µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pausar todos os torrents"
	, "Retomar todos os torrents"
	, "R: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "E: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avançado"
	, "Largura de Banda"
	, "Ligação"
	, "Cache do Disco"
	, "Directorias"
	, "Geral"
	, "Agendador de Tarefas"
	, "Fila de espera"
	, "Extras UI"
	, "Definições de IU"
	, "BitTorrent"
	, "IU Web"
	, "Limite de Transferência"
	, "Correr Programa"
	, "Mostrar propriedades||Iniciar/Parar||Abrir Pasta||Mostrar Barra de Transferências||"
	, "Desactivar||Activar||Forçar||"
	, "(nenhum)||Socks4||Socks5||HTTPS||HTTP||"
	, "Envios||Transferências||Envios + Transferências||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nome"
	, "Valor"
	, "Seg||Ter||Qua||Qui||Sex||Sáb||Dom||"
	, "Segunda-feira||Terça-feira||Quarta-feira||Quinta-feira||Sexta-feira||Sábado||Domingo||"
	, "Vel. Máxima"
	, "Vel. Máxima - Usa limites de largura de banda normais globais"
	, "Limitado"
	, "Limitado - Utiliza limites de largura de banda especificados no agendador"
	, "Apenas Envio"
	, "Apenas Envio - Só envia informação (incluindo incompleto)"
	, "Desligar"
	, "Desligar - Para todos os torrents não forçados"
	, "<= %d horas"
	, "(Ignorar)"
	, "<= %d minutos"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dsm %dd"
	, "%da %dsm"
];