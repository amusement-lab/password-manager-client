/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPasswords } from '../models/GetPasswords';
import type { Password } from '../models/Password';
import type { UpsertPassword } from '../models/UpsertPassword';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PasswordService {
    /**
     * Get all user password data
     * @returns GetPasswords Array with password data
     * @throws ApiError
     */
    public static getPassword(): CancelablePromise<Array<GetPasswords>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/password',
        });
    }
    /**
     * Create one new password data
     * @param requestBody
     * @returns any Object with message data
     * @throws ApiError
     */
    public static postPassword(
        requestBody?: UpsertPassword,
    ): CancelablePromise<{
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get one user password data by id
     * @param id
     * @returns Password Object with password data.
     * @throws ApiError
     */
    public static getPassword1(
        id: string,
    ): CancelablePromise<Password> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/password/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Edit one password data by id
     * @param id
     * @param requestBody
     * @returns any Object with message data
     * @throws ApiError
     */
    public static putPassword(
        id: string,
        requestBody?: UpsertPassword,
    ): CancelablePromise<{
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/password/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete one password data by id
     * @param id
     * @returns any Object with message data
     * @throws ApiError
     */
    public static deletePassword(
        id: string,
    ): CancelablePromise<{
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/password/{id}',
            path: {
                'id': id,
            },
        });
    }
}
