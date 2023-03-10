import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { ProductAdComponent } from './pages/home/product-ad/product-ad.component';
import { BeforeFooterComponent } from './shared/components/before-footer/before-footer.component';
import { CatHeroComponent } from './pages/category/cat-hero/cat-hero.component';
import { ProductsShowcaseComponent } from './pages/category/products-showcase/products-showcase.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProductInfoComponent } from './pages/details/product-info/product-info.component';
import { FeaturesComponent } from './pages/details/features/features.component';
import { ImagesComponent } from './pages/details/images/images.component';
import { OtherProductComponent } from './pages/details/other-product/other-product.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalDialogComponent } from './pages/checkout/final-dialog/final-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CategoryComponent,
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    ProductAdComponent,
    BeforeFooterComponent,
    CatHeroComponent,
    ProductsShowcaseComponent,
    DetailsComponent,
    ProductInfoComponent,
    FeaturesComponent,
    ImagesComponent,
    OtherProductComponent,
    CartComponent,
    CheckoutComponent,
    FinalDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
