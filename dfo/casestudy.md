# Bakgrunn #

Et lite team på 4 fullstack-utviklere jobber med en webapplikasjon som består av: 
- Frontend (React/Next.js) 
- Backend API (Node.js/Python) 
- PostgreSQL database 

Hver kunde har sitt eget isolerte miljø (namespace i Kubernetes) med egne pods (Docker containere) for alle tjenestene. Teamet deployer til 10 kundemiljøer flere ganger daglig. 
Deployment skjer via GitOps, et Git-repository inneholder versjonene av Docker images som skal kjøre i hvert miljø. Selve utrullingen av nye images håndteres av andre. 

## Oppgave ##
Design en CI/CD-pipeline som starter når en utvikler pusher til main branch, og ender med at alle miljøer er oppdatert. 

Pipelinen skal: 
1. Kjøre automatiserte tester (unit og e2e) 
2. Bygge og pushe Docker images til et Container Registry 
3. Oppdatere GitOps-repoet slik at miljøene får de nye imagene 

## Ting å ta stilling til ##
- Hvilke tester kjører når i pipelinen? (parallelt, sekvensielt?) 
- Hva skjer hvis testene feiler? Stoppes hele pipelinen? Kan utvikleren overstyre? 
- Hvordan oppdateres GitOps-repoet? (manuelt, automatisk, PR?) 
- Hvordan bygger du Docker images effektivt? (caching, multi-stage builds?) 
- Hvordan håndteres secrets og miljøspesifikk config? 
- Hvordan håndteres database-migrasjoner? 

## Leveranse ##
Vi forventer ingen omfattende utredning. Regn med å bruke rundt 60 minutter. Du kan levere enten: 

Arkitekturtegning (Mermaid, draw.io, Paint, ...) som viser: 
- Pipeline-steg og rekkefølge 
- Hva som trigger hva 
- Repositories og container registry involvert 

Og/eller 1-2 sider tekst som beskriver: 
- Hovedkomponentene i pipelinen 
- Viktige valg du har tatt og hvorfor 
- Utfordringer du ser og hvordan du løser dem 
· Hva du ville forbedret med mer tid 
Tips 
- Vi er interessert i hvordan du tenker, ikke perfekte løsninger 
- Det er greit å nevne ting du ville googlet, spurt Kl om, eller sjekket dokumentasjon på 
- Ta gjerne utgangspunkt i verktøy du kjenner (GitHub Actions, GitLab Cl, Jenkins, etc.) 
- Tenk på hva som er "godt nok" vs. "ideelt" for et lite team 
