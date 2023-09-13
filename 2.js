/*************************************

项目名称：英语听力播放器
下载地址：https://t.cn/A6OJJfW5
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iTunes/Lister.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "receipt_creation_date" : "2023-08-12 09:09:09 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1691802549000",
        "expires_date" : "2099-12-31 09:09:09 Etc/GMT",
        "expires_date_pst" : "2099-12-31 09:09:09 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "99999999999999",
        "is_trial_period" : "false",
        "original_transaction_id" : "99999999999999",
        "purchase_date" : "2023-08-12 09:09:09 Etc/GMT",
        "product_id" : "kipa_kilonotes_quarter_subscription",
        "original_purchase_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1691802549000",
        "web_order_line_item_id" : "99999999999999",
        "expires_date_ms" : "4102362549000",
        "purchase_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-08-12 09:09:09 Etc/GMT"
      }
    ],
    "bundle_id" : "com.topstack.iphone.Kilonotes",
    "receipt_creation_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
    "request_date" : "2023-08-12 09:09:09 Etc/GMT",
    "request_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
    "original_purchase_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
    "request_date_ms" : "1691802549000",
    "application_version" : "110",
    "original_purchase_date_ms" : "1691802549000",
    "receipt_creation_date_ms" : "1691802549000",
    "original_application_version" : "123",
    "original_purchase_date" : "2023-08-12 09:09:09 Etc/GMT"
  },
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1691802549000",
      "expires_date" : "2099-12-31 09:09:09 Etc/GMT",
      "expires_date_pst" : "2099-12-31 09:09:09 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "99999999999999",
      "is_trial_period" : "false",
      "original_transaction_id" : "99999999999999",
      "purchase_date" : "2023-08-12 09:09:09 Etc/GMT",
      "product_id" : "kipa_kilonotes_quarter_subscription",
      "original_purchase_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "66666666",
      "original_purchase_date_ms" : "1691802549000",
      "web_order_line_item_id" : "99999999999999",
      "expires_date_ms" : "4102362549000",
      "purchase_date_pst" : "2023-08-12 09:09:09 America/Los_Angeles",
      "original_purchase_date" : "2023-08-12 09:09:09 Etc/GMT"
    }
  ],
  "pending_renewal_info" : [
    {
      "product_id" : "kipa_kilonotes_quarter_subscription",
      "original_transaction_id" : "99999999999999",
      "auto_renew_product_id" : "kipa_kilonotes_quarter_subscription",
      "auto_renew_status" : "1"
    }
  ]
}
