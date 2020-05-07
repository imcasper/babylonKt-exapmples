package casper.asset

import casper.signal.concrete.EitherFuture

typealias AssetFuture<Data> = EitherFuture<Data, String>

