import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Product } from "../types/product";
import { catchError, throwError } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ) {}

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)

        return throwError(() => this)
    }

    getAll() {
        return this.http.get<Product[]>('https://fakestoreapi.com/products')
        .pipe(
            catchError(this.errorHandler.bind(this))
        )
    }
}