// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class PaymentReferences extends APIResource {
  /**
   * list payment_references
   */
  list(
    query?: PaymentReferenceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentReferencesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaymentReferencesPage>;
  list(
    query: PaymentReferenceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentReferencesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/payment_references', PaymentReferencesPage, { query, ...options });
  }

  /**
   * get payment_reference
   */
  retireve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PaymentReference>> {
    return this.get(`/api/payment_references/${id}`, options);
  }
}

export class PaymentReferencesPage extends Page<PaymentReference> {}

export interface PaymentReference {
  created_at: string;

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The actual reference number assigned by the bank.
   */
  reference_number: string;

  /**
   * The type of reference number.
   */
  reference_number_type:
    | 'ach_original_trace_number'
    | 'ach_trace_number'
    | 'bankprov_payment_activity_date'
    | 'bankprov_payment_id'
    | 'bnk_dev_prenotification_id'
    | 'bnk_dev_transfer_id'
    | 'bofa_end_to_end_id'
    | 'bofa_transaction_id'
    | 'check_number'
    | 'cross_river_payment_id'
    | 'cross_river_transaction_id'
    | 'currencycloud_conversion_id'
    | 'currencycloud_payment_id'
    | 'dc_bank_transaction_id'
    | 'dwolla_transaction_id'
    | 'eft_trace_number'
    | 'fedwire_imad'
    | 'fedwire_omad'
    | 'first_republic_internal_id'
    | 'goldman_sachs_collection_request_id'
    | 'goldman_sachs_end_to_end_id'
    | 'goldman_sachs_payment_request_id'
    | 'goldman_sachs_request_id'
    | 'goldman_sachs_unique_payment_id'
    | 'interac_message_id'
    | 'jpmc_ccn'
    | 'jpmc_customer_reference_id'
    | 'jpmc_end_to_end_id'
    | 'jpmc_firm_root_id'
    | 'jpmc_p3_id'
    | 'jpmc_payment_batch_id'
    | 'jpmc_payment_information_id'
    | 'lob_check_id'
    | 'other'
    | 'partial_swift_mir'
    | 'pnc_clearing_reference'
    | 'pnc_instruction_id'
    | 'pnc_multipayment_id'
    | 'pnc_payment_trace_id'
    | 'rtp_instruction_id'
    | 'signet_api_reference_id'
    | 'signet_confirmation_id'
    | 'signet_request_id'
    | 'silvergate_payment_id'
    | 'swift_mir'
    | 'swift_uetr'
    | 'usbank_payment_id'
    | 'wells_fargo_payment_id'
    | 'wells_fargo_trace_number';

  /**
   * The id of the referenceable to search for. Must be accompanied by the
   * referenceable_type or will return an error.
   */
  referenceable_id: string;

  /**
   * One of the referenceable types. This must be accompanied by the id of the
   * referenceable or will return an error.
   */
  referenceable_type: 'payment_order' | 'reversal' | 'return';

  updated_at: string;
}

export interface PaymentReferenceListParams extends PageParams {
  /**
   * The actual reference number assigned by the bank.
   */
  reference_number?: string;

  /**
   * The id of the referenceable to search for. Must be accompanied by the
   * referenceable_type or will return an error.
   */
  referenceable_id?: string;

  /**
   * One of the referenceable types. This must be accompanied by the id of the
   * referenceable or will return an error.
   */
  referenceable_type?: 'payment_order' | 'return' | 'reversal';
}
