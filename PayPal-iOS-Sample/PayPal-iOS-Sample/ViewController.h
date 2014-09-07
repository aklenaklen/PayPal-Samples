//
//  ViewController.h
//  PayPal-iOS-Sample
//
//  Created by Alan Wong on 22/8/14.
//  Copyright (c) 2014 alawong. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "PayPalMobile.h"
#import <AFNetworking.h>

@interface ViewController : UIViewController <PayPalPaymentDelegate>

@property (nonatomic, strong, readwrite) PayPalConfiguration *payPalConfiguration;
- (IBAction)pay:(id)sender;

@end
