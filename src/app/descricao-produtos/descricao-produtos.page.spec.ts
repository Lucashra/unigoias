import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescricaoProdutosPage } from './descricao-produtos.page';

describe('DescricaoProdutosPage', () => {
  let component: DescricaoProdutosPage;
  let fixture: ComponentFixture<DescricaoProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescricaoProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
