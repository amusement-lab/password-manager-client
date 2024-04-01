/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeKey } from '../models/ChangeKey';
import type { LoginUser } from '../models/LoginUser';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Register user
     * @param requestBody
     * @returns any Object with message data
     * @throws ApiError
     */
    public static postRegister(
        requestBody?: User,
    ): CancelablePromise<{
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Login user
     * @param requestBody
     * @returns any Object with token data
     * @throws ApiError
     */
    public static postLogin(
        requestBody?: LoginUser,
    ): CancelablePromise<{
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change key/password for open the vault
     * @param requestBody
     * @returns any Object with message data
     * @throws ApiError
     */
    public static postChangeKey(
        requestBody?: ChangeKey,
    ): CancelablePromise<{
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/change-key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
