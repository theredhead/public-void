import { TestBed } from '@angular/core/testing';

import { DocumentStorageService } from './document-storage.service';

describe('DocumentStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentStorageService = TestBed.get(DocumentStorageService);
    expect(service).toBeTruthy();
  });
});
