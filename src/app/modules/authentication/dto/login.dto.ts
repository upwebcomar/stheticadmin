import { AbstractControl } from "@angular/forms"

export interface LoginDto {
    username:string | null | undefined
    password:string | null | undefined
}