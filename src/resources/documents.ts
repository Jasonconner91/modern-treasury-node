// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as DocumentsAPI from 'modern-treasury/resources/documents';
import { type Uploadable, multipartFormRequestOptions } from 'modern-treasury/core';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Documents extends APIResource {
  /**
   * Create a document.
   */
  create(params: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post(
      '/api/documents',
      multipartFormRequestOptions({
        body,
        ...options,
        headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
      }),
    );
  }

  /**
   * Get an existing document.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this.get(`/api/documents/${id}`, options);
  }

  /**
   * Get a list of documents.
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.PagePromise<DocumentsPage, Document>;
  list(options?: Core.RequestOptions): Core.PagePromise<DocumentsPage, Document>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage, Document> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/documents', DocumentsPage, { query, ...options });
  }
}

export class DocumentsPage extends Page<Document> {}

export interface Document {
  id: string;

  created_at: string;

  discarded_at: string | null;

  document_details: Array<Document.DocumentDetail>;

  /**
   * A category given to the document, can be `null`.
   */
  document_type: string | null;

  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  /**
   * The type of the associated object. Currently can be one of `payment_order`,
   * `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`,
   * `case`, `internal_account`, `decision`, or `external_account`.
   */
  documentable_type:
    | 'case'
    | 'counterparty'
    | 'expected_payment'
    | 'external_account'
    | 'internal_account'
    | 'organization'
    | 'paper_item'
    | 'payment_order'
    | 'transaction'
    | 'decision'
    | 'connection';

  file: Document.File;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The source of the document. Can be `vendor`, `customer`, or `modern_treasury`.
   */
  source: string;

  updated_at: string;
}

export namespace Document {
  export interface DocumentDetail {
    id: string;

    created_at: string;

    discarded_at: string | null;

    document_identifier: string;

    document_identifier_type: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  export interface File {
    /**
     * The MIME content type of the document.
     */
    content_type?: string;

    /**
     * The original filename of the document.
     */
    filename?: string;

    /**
     * The size of the document in bytes.
     */
    size?: number;
  }
}

export interface DocumentCreateParams {
  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  documentable_type:
    | 'cases'
    | 'counterparties'
    | 'expected_payments'
    | 'external_accounts'
    | 'internal_accounts'
    | 'organizations'
    | 'paper_items'
    | 'payment_orders'
    | 'transactions'
    | 'decisions'
    | 'connections';

  file: Uploadable;

  /**
   * A category given to the document, can be `null`.
   */
  document_type?: string;
}

export interface DocumentListParams extends PageParams {
  /**
   * The unique identifier for the associated object.
   */
  documentable_id?: string;

  /**
   * The type of the associated object. Currently can be one of `payment_order`,
   * `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`,
   * `case`, `internal_account`, `decision`, or `external_account`.
   */
  documentable_type?:
    | 'cases'
    | 'counterparties'
    | 'expected_payments'
    | 'external_accounts'
    | 'internal_accounts'
    | 'organizations'
    | 'paper_items'
    | 'payment_orders'
    | 'transactions'
    | 'decisions'
    | 'connections';
}

export namespace Documents {
  export type Document = DocumentsAPI.Document;
  export import DocumentsPage = DocumentsAPI.DocumentsPage;
  export type DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export type DocumentListParams = DocumentsAPI.DocumentListParams;
}
