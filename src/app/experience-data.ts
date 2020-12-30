import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { IExperience } from "./interfaces/experience";

export class ExperienceData implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {

    const experience: IExperience[] = [
      {
        'id': 1,
        'name': '.NET DEV',
        'corporation': 'Urząd państwowy',
        'periodOfWork': '12.2018 - obecnie',
        'responsibilities': [
          {
            'id': 1,
            'description': 'Rozwój oraz utrzymanie kluczowego projektu w technologii Winform'
          },
          {
            'id': 2,
            'description': 'Optymalizacja zapytań SQL - MSSQL'
          },
          {
            'id': 3,
            'description': 'Implementacja nowych rozwiązań Web dla wewnętrznych potrzeb firmy'
          },
          {
            'id': 4,
            'description': 'Sprawowanie pełnego cyklu rozwoju aplikacji (kontrola jakości kodu, CI, publikacje, migracje, wiele środowisk testowych itd.)'
          },
          {
            'id': 5,
            'description': 'Uczestniczenie podczas spotkań DDD (m.in. Event Storming) oraz zbieranie wymagań od biznesu'
          },
          {
            'id': 5,
            'description': 'Rozwiązywanie problemów oraz zgłoszeń użytkowników'
          }
        ]
      },
      {
        'id': 2,
        'name': 'QA Engineer',
        'corporation': 'SuperGrosz.pl',
        'periodOfWork': '07.2018 - 12.2018',
        'responsibilities': [
          {
            'id': 1,
            'description': 'Implementacja testów automatycznych'
          },
          {
            'id': 2,
            'description': 'Wsprarcie dla zespołu testerów manualnych'
          }
        ]
      }
    ];
    return {experience};
  }

}
