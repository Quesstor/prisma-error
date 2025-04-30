
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model PDF
 * 
 */
export type PDF = $Result.DefaultSelection<Prisma.$PDFPayload>
/**
 * Model OrderLine
 * 
 */
export type OrderLine = $Result.DefaultSelection<Prisma.$OrderLinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pDF`: Exposes CRUD operations for the **PDF** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PDFS
    * const pDFS = await prisma.pDF.findMany()
    * ```
    */
  get pDF(): Prisma.PDFDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderLine`: Exposes CRUD operations for the **OrderLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderLines
    * const orderLines = await prisma.orderLine.findMany()
    * ```
    */
  get orderLine(): Prisma.OrderLineDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    Invoice: 'Invoice',
    PDF: 'PDF',
    OrderLine: 'OrderLine'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "invoice" | "pDF" | "orderLine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      PDF: {
        payload: Prisma.$PDFPayload<ExtArgs>
        fields: Prisma.PDFFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PDFFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PDFFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          findFirst: {
            args: Prisma.PDFFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PDFFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          findMany: {
            args: Prisma.PDFFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          create: {
            args: Prisma.PDFCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          createMany: {
            args: Prisma.PDFCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PDFCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          delete: {
            args: Prisma.PDFDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          update: {
            args: Prisma.PDFUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          deleteMany: {
            args: Prisma.PDFDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PDFUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PDFUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>[]
          }
          upsert: {
            args: Prisma.PDFUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFPayload>
          }
          aggregate: {
            args: Prisma.PDFAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePDF>
          }
          groupBy: {
            args: Prisma.PDFGroupByArgs<ExtArgs>
            result: $Utils.Optional<PDFGroupByOutputType>[]
          }
          count: {
            args: Prisma.PDFCountArgs<ExtArgs>
            result: $Utils.Optional<PDFCountAggregateOutputType> | number
          }
        }
      }
      OrderLine: {
        payload: Prisma.$OrderLinePayload<ExtArgs>
        fields: Prisma.OrderLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          findFirst: {
            args: Prisma.OrderLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          findMany: {
            args: Prisma.OrderLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>[]
          }
          create: {
            args: Prisma.OrderLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          createMany: {
            args: Prisma.OrderLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>[]
          }
          delete: {
            args: Prisma.OrderLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          update: {
            args: Prisma.OrderLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          deleteMany: {
            args: Prisma.OrderLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>[]
          }
          upsert: {
            args: Prisma.OrderLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderLinePayload>
          }
          aggregate: {
            args: Prisma.OrderLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderLine>
          }
          groupBy: {
            args: Prisma.OrderLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderLineCountArgs<ExtArgs>
            result: $Utils.Optional<OrderLineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    invoice?: InvoiceOmit
    pDF?: PDFOmit
    orderLine?: OrderLineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    invoices: number
    orderLines: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | OrderCountOutputTypeCountInvoicesArgs
    orderLines?: boolean | OrderCountOutputTypeCountOrderLinesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderLineWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    PDF: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PDF?: boolean | InvoiceCountOutputTypeCountPDFArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPDFArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PDFWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoices?: boolean | Order$invoicesArgs<ExtArgs>
    orderLines?: boolean | Order$orderLinesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Order$invoicesArgs<ExtArgs>
    orderLines?: boolean | Order$orderLinesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      orderLines: Prisma.$OrderLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Order$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Order$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderLines<T extends Order$orderLinesArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data?: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.invoices
   */
  export type Order$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Order.orderLines
   */
  export type Order$orderLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    where?: OrderLineWhereInput
    orderBy?: OrderLineOrderByWithRelationInput | OrderLineOrderByWithRelationInput[]
    cursor?: OrderLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderLineScalarFieldEnum | OrderLineScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    orderId: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    orderId?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    orderId: number
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    PDF?: boolean | Invoice$PDFArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    orderId?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    PDF?: boolean | Invoice$PDFArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      PDF: Prisma.$PDFPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PDF<T extends Invoice$PDFArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$PDFArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly orderId: FieldRef<"Invoice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.PDF
   */
  export type Invoice$PDFArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    where?: PDFWhereInput
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    cursor?: PDFWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model PDF
   */

  export type AggregatePDF = {
    _count: PDFCountAggregateOutputType | null
    _avg: PDFAvgAggregateOutputType | null
    _sum: PDFSumAggregateOutputType | null
    _min: PDFMinAggregateOutputType | null
    _max: PDFMaxAggregateOutputType | null
  }

  export type PDFAvgAggregateOutputType = {
    id: number | null
    invoiceId: number | null
  }

  export type PDFSumAggregateOutputType = {
    id: number | null
    invoiceId: number | null
  }

  export type PDFMinAggregateOutputType = {
    id: number | null
    invoiceId: number | null
  }

  export type PDFMaxAggregateOutputType = {
    id: number | null
    invoiceId: number | null
  }

  export type PDFCountAggregateOutputType = {
    id: number
    invoiceId: number
    _all: number
  }


  export type PDFAvgAggregateInputType = {
    id?: true
    invoiceId?: true
  }

  export type PDFSumAggregateInputType = {
    id?: true
    invoiceId?: true
  }

  export type PDFMinAggregateInputType = {
    id?: true
    invoiceId?: true
  }

  export type PDFMaxAggregateInputType = {
    id?: true
    invoiceId?: true
  }

  export type PDFCountAggregateInputType = {
    id?: true
    invoiceId?: true
    _all?: true
  }

  export type PDFAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDF to aggregate.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PDFS
    **/
    _count?: true | PDFCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PDFAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PDFSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PDFMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PDFMaxAggregateInputType
  }

  export type GetPDFAggregateType<T extends PDFAggregateArgs> = {
        [P in keyof T & keyof AggregatePDF]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePDF[P]>
      : GetScalarType<T[P], AggregatePDF[P]>
  }




  export type PDFGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PDFWhereInput
    orderBy?: PDFOrderByWithAggregationInput | PDFOrderByWithAggregationInput[]
    by: PDFScalarFieldEnum[] | PDFScalarFieldEnum
    having?: PDFScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PDFCountAggregateInputType | true
    _avg?: PDFAvgAggregateInputType
    _sum?: PDFSumAggregateInputType
    _min?: PDFMinAggregateInputType
    _max?: PDFMaxAggregateInputType
  }

  export type PDFGroupByOutputType = {
    id: number
    invoiceId: number
    _count: PDFCountAggregateOutputType | null
    _avg: PDFAvgAggregateOutputType | null
    _sum: PDFSumAggregateOutputType | null
    _min: PDFMinAggregateOutputType | null
    _max: PDFMaxAggregateOutputType | null
  }

  type GetPDFGroupByPayload<T extends PDFGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PDFGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PDFGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PDFGroupByOutputType[P]>
            : GetScalarType<T[P], PDFGroupByOutputType[P]>
        }
      >
    >


  export type PDFSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDF"]>

  export type PDFSelectScalar = {
    id?: boolean
    invoiceId?: boolean
  }

  export type PDFOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId", ExtArgs["result"]["pDF"]>
  export type PDFInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PDFIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PDFIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PDFPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PDF"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoiceId: number
    }, ExtArgs["result"]["pDF"]>
    composites: {}
  }

  type PDFGetPayload<S extends boolean | null | undefined | PDFDefaultArgs> = $Result.GetResult<Prisma.$PDFPayload, S>

  type PDFCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PDFFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PDFCountAggregateInputType | true
    }

  export interface PDFDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PDF'], meta: { name: 'PDF' } }
    /**
     * Find zero or one PDF that matches the filter.
     * @param {PDFFindUniqueArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PDFFindUniqueArgs>(args: SelectSubset<T, PDFFindUniqueArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PDF that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PDFFindUniqueOrThrowArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PDFFindUniqueOrThrowArgs>(args: SelectSubset<T, PDFFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDF that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindFirstArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PDFFindFirstArgs>(args?: SelectSubset<T, PDFFindFirstArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDF that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindFirstOrThrowArgs} args - Arguments to find a PDF
     * @example
     * // Get one PDF
     * const pDF = await prisma.pDF.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PDFFindFirstOrThrowArgs>(args?: SelectSubset<T, PDFFindFirstOrThrowArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PDFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PDFS
     * const pDFS = await prisma.pDF.findMany()
     * 
     * // Get first 10 PDFS
     * const pDFS = await prisma.pDF.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pDFWithIdOnly = await prisma.pDF.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PDFFindManyArgs>(args?: SelectSubset<T, PDFFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PDF.
     * @param {PDFCreateArgs} args - Arguments to create a PDF.
     * @example
     * // Create one PDF
     * const PDF = await prisma.pDF.create({
     *   data: {
     *     // ... data to create a PDF
     *   }
     * })
     * 
     */
    create<T extends PDFCreateArgs>(args: SelectSubset<T, PDFCreateArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PDFS.
     * @param {PDFCreateManyArgs} args - Arguments to create many PDFS.
     * @example
     * // Create many PDFS
     * const pDF = await prisma.pDF.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PDFCreateManyArgs>(args?: SelectSubset<T, PDFCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PDFS and returns the data saved in the database.
     * @param {PDFCreateManyAndReturnArgs} args - Arguments to create many PDFS.
     * @example
     * // Create many PDFS
     * const pDF = await prisma.pDF.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PDFS and only return the `id`
     * const pDFWithIdOnly = await prisma.pDF.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PDFCreateManyAndReturnArgs>(args?: SelectSubset<T, PDFCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PDF.
     * @param {PDFDeleteArgs} args - Arguments to delete one PDF.
     * @example
     * // Delete one PDF
     * const PDF = await prisma.pDF.delete({
     *   where: {
     *     // ... filter to delete one PDF
     *   }
     * })
     * 
     */
    delete<T extends PDFDeleteArgs>(args: SelectSubset<T, PDFDeleteArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PDF.
     * @param {PDFUpdateArgs} args - Arguments to update one PDF.
     * @example
     * // Update one PDF
     * const pDF = await prisma.pDF.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PDFUpdateArgs>(args: SelectSubset<T, PDFUpdateArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PDFS.
     * @param {PDFDeleteManyArgs} args - Arguments to filter PDFS to delete.
     * @example
     * // Delete a few PDFS
     * const { count } = await prisma.pDF.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PDFDeleteManyArgs>(args?: SelectSubset<T, PDFDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PDFS
     * const pDF = await prisma.pDF.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PDFUpdateManyArgs>(args: SelectSubset<T, PDFUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PDFS and returns the data updated in the database.
     * @param {PDFUpdateManyAndReturnArgs} args - Arguments to update many PDFS.
     * @example
     * // Update many PDFS
     * const pDF = await prisma.pDF.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PDFS and only return the `id`
     * const pDFWithIdOnly = await prisma.pDF.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PDFUpdateManyAndReturnArgs>(args: SelectSubset<T, PDFUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PDF.
     * @param {PDFUpsertArgs} args - Arguments to update or create a PDF.
     * @example
     * // Update or create a PDF
     * const pDF = await prisma.pDF.upsert({
     *   create: {
     *     // ... data to create a PDF
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PDF we want to update
     *   }
     * })
     */
    upsert<T extends PDFUpsertArgs>(args: SelectSubset<T, PDFUpsertArgs<ExtArgs>>): Prisma__PDFClient<$Result.GetResult<Prisma.$PDFPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFCountArgs} args - Arguments to filter PDFS to count.
     * @example
     * // Count the number of PDFS
     * const count = await prisma.pDF.count({
     *   where: {
     *     // ... the filter for the PDFS we want to count
     *   }
     * })
    **/
    count<T extends PDFCountArgs>(
      args?: Subset<T, PDFCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PDFCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PDFAggregateArgs>(args: Subset<T, PDFAggregateArgs>): Prisma.PrismaPromise<GetPDFAggregateType<T>>

    /**
     * Group by PDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PDFGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PDFGroupByArgs['orderBy'] }
        : { orderBy?: PDFGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PDFGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPDFGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PDF model
   */
  readonly fields: PDFFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PDF.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PDFClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PDF model
   */
  interface PDFFieldRefs {
    readonly id: FieldRef<"PDF", 'Int'>
    readonly invoiceId: FieldRef<"PDF", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PDF findUnique
   */
  export type PDFFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF findUniqueOrThrow
   */
  export type PDFFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF findFirst
   */
  export type PDFFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFS.
     */
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF findFirstOrThrow
   */
  export type PDFFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDF to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFS.
     */
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF findMany
   */
  export type PDFFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter, which PDFS to fetch.
     */
    where?: PDFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFS to fetch.
     */
    orderBy?: PDFOrderByWithRelationInput | PDFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PDFS.
     */
    cursor?: PDFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFS.
     */
    skip?: number
    distinct?: PDFScalarFieldEnum | PDFScalarFieldEnum[]
  }

  /**
   * PDF create
   */
  export type PDFCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The data needed to create a PDF.
     */
    data: XOR<PDFCreateInput, PDFUncheckedCreateInput>
  }

  /**
   * PDF createMany
   */
  export type PDFCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PDFS.
     */
    data: PDFCreateManyInput | PDFCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PDF createManyAndReturn
   */
  export type PDFCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * The data used to create many PDFS.
     */
    data: PDFCreateManyInput | PDFCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PDF update
   */
  export type PDFUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The data needed to update a PDF.
     */
    data: XOR<PDFUpdateInput, PDFUncheckedUpdateInput>
    /**
     * Choose, which PDF to update.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF updateMany
   */
  export type PDFUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PDFS.
     */
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyInput>
    /**
     * Filter which PDFS to update
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to update.
     */
    limit?: number
  }

  /**
   * PDF updateManyAndReturn
   */
  export type PDFUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * The data used to update PDFS.
     */
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyInput>
    /**
     * Filter which PDFS to update
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PDF upsert
   */
  export type PDFUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * The filter to search for the PDF to update in case it exists.
     */
    where: PDFWhereUniqueInput
    /**
     * In case the PDF found by the `where` argument doesn't exist, create a new PDF with this data.
     */
    create: XOR<PDFCreateInput, PDFUncheckedCreateInput>
    /**
     * In case the PDF was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PDFUpdateInput, PDFUncheckedUpdateInput>
  }

  /**
   * PDF delete
   */
  export type PDFDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
    /**
     * Filter which PDF to delete.
     */
    where: PDFWhereUniqueInput
  }

  /**
   * PDF deleteMany
   */
  export type PDFDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDFS to delete
     */
    where?: PDFWhereInput
    /**
     * Limit how many PDFS to delete.
     */
    limit?: number
  }

  /**
   * PDF without action
   */
  export type PDFDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDF
     */
    select?: PDFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDF
     */
    omit?: PDFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFInclude<ExtArgs> | null
  }


  /**
   * Model OrderLine
   */

  export type AggregateOrderLine = {
    _count: OrderLineCountAggregateOutputType | null
    _avg: OrderLineAvgAggregateOutputType | null
    _sum: OrderLineSumAggregateOutputType | null
    _min: OrderLineMinAggregateOutputType | null
    _max: OrderLineMaxAggregateOutputType | null
  }

  export type OrderLineAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderLineSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderLineMinAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderLineMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderLineCountAggregateOutputType = {
    id: number
    orderId: number
    _all: number
  }


  export type OrderLineAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderLineSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderLineMinAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderLineMaxAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderLineCountAggregateInputType = {
    id?: true
    orderId?: true
    _all?: true
  }

  export type OrderLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderLine to aggregate.
     */
    where?: OrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLines to fetch.
     */
    orderBy?: OrderLineOrderByWithRelationInput | OrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderLines
    **/
    _count?: true | OrderLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderLineMaxAggregateInputType
  }

  export type GetOrderLineAggregateType<T extends OrderLineAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderLine[P]>
      : GetScalarType<T[P], AggregateOrderLine[P]>
  }




  export type OrderLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderLineWhereInput
    orderBy?: OrderLineOrderByWithAggregationInput | OrderLineOrderByWithAggregationInput[]
    by: OrderLineScalarFieldEnum[] | OrderLineScalarFieldEnum
    having?: OrderLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderLineCountAggregateInputType | true
    _avg?: OrderLineAvgAggregateInputType
    _sum?: OrderLineSumAggregateInputType
    _min?: OrderLineMinAggregateInputType
    _max?: OrderLineMaxAggregateInputType
  }

  export type OrderLineGroupByOutputType = {
    id: number
    orderId: number
    _count: OrderLineCountAggregateOutputType | null
    _avg: OrderLineAvgAggregateOutputType | null
    _sum: OrderLineSumAggregateOutputType | null
    _min: OrderLineMinAggregateOutputType | null
    _max: OrderLineMaxAggregateOutputType | null
  }

  type GetOrderLineGroupByPayload<T extends OrderLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderLineGroupByOutputType[P]>
            : GetScalarType<T[P], OrderLineGroupByOutputType[P]>
        }
      >
    >


  export type OrderLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLine"]>

  export type OrderLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLine"]>

  export type OrderLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderLine"]>

  export type OrderLineSelectScalar = {
    id?: boolean
    orderId?: boolean
  }

  export type OrderLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId", ExtArgs["result"]["orderLine"]>
  export type OrderLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderLine"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
    }, ExtArgs["result"]["orderLine"]>
    composites: {}
  }

  type OrderLineGetPayload<S extends boolean | null | undefined | OrderLineDefaultArgs> = $Result.GetResult<Prisma.$OrderLinePayload, S>

  type OrderLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderLineCountAggregateInputType | true
    }

  export interface OrderLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderLine'], meta: { name: 'OrderLine' } }
    /**
     * Find zero or one OrderLine that matches the filter.
     * @param {OrderLineFindUniqueArgs} args - Arguments to find a OrderLine
     * @example
     * // Get one OrderLine
     * const orderLine = await prisma.orderLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderLineFindUniqueArgs>(args: SelectSubset<T, OrderLineFindUniqueArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderLineFindUniqueOrThrowArgs} args - Arguments to find a OrderLine
     * @example
     * // Get one OrderLine
     * const orderLine = await prisma.orderLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderLineFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineFindFirstArgs} args - Arguments to find a OrderLine
     * @example
     * // Get one OrderLine
     * const orderLine = await prisma.orderLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderLineFindFirstArgs>(args?: SelectSubset<T, OrderLineFindFirstArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineFindFirstOrThrowArgs} args - Arguments to find a OrderLine
     * @example
     * // Get one OrderLine
     * const orderLine = await prisma.orderLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderLineFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderLines
     * const orderLines = await prisma.orderLine.findMany()
     * 
     * // Get first 10 OrderLines
     * const orderLines = await prisma.orderLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderLineWithIdOnly = await prisma.orderLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderLineFindManyArgs>(args?: SelectSubset<T, OrderLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderLine.
     * @param {OrderLineCreateArgs} args - Arguments to create a OrderLine.
     * @example
     * // Create one OrderLine
     * const OrderLine = await prisma.orderLine.create({
     *   data: {
     *     // ... data to create a OrderLine
     *   }
     * })
     * 
     */
    create<T extends OrderLineCreateArgs>(args: SelectSubset<T, OrderLineCreateArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderLines.
     * @param {OrderLineCreateManyArgs} args - Arguments to create many OrderLines.
     * @example
     * // Create many OrderLines
     * const orderLine = await prisma.orderLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderLineCreateManyArgs>(args?: SelectSubset<T, OrderLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderLines and returns the data saved in the database.
     * @param {OrderLineCreateManyAndReturnArgs} args - Arguments to create many OrderLines.
     * @example
     * // Create many OrderLines
     * const orderLine = await prisma.orderLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderLines and only return the `id`
     * const orderLineWithIdOnly = await prisma.orderLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderLineCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderLine.
     * @param {OrderLineDeleteArgs} args - Arguments to delete one OrderLine.
     * @example
     * // Delete one OrderLine
     * const OrderLine = await prisma.orderLine.delete({
     *   where: {
     *     // ... filter to delete one OrderLine
     *   }
     * })
     * 
     */
    delete<T extends OrderLineDeleteArgs>(args: SelectSubset<T, OrderLineDeleteArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderLine.
     * @param {OrderLineUpdateArgs} args - Arguments to update one OrderLine.
     * @example
     * // Update one OrderLine
     * const orderLine = await prisma.orderLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderLineUpdateArgs>(args: SelectSubset<T, OrderLineUpdateArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderLines.
     * @param {OrderLineDeleteManyArgs} args - Arguments to filter OrderLines to delete.
     * @example
     * // Delete a few OrderLines
     * const { count } = await prisma.orderLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderLineDeleteManyArgs>(args?: SelectSubset<T, OrderLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderLines
     * const orderLine = await prisma.orderLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderLineUpdateManyArgs>(args: SelectSubset<T, OrderLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLines and returns the data updated in the database.
     * @param {OrderLineUpdateManyAndReturnArgs} args - Arguments to update many OrderLines.
     * @example
     * // Update many OrderLines
     * const orderLine = await prisma.orderLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderLines and only return the `id`
     * const orderLineWithIdOnly = await prisma.orderLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderLineUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderLine.
     * @param {OrderLineUpsertArgs} args - Arguments to update or create a OrderLine.
     * @example
     * // Update or create a OrderLine
     * const orderLine = await prisma.orderLine.upsert({
     *   create: {
     *     // ... data to create a OrderLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderLine we want to update
     *   }
     * })
     */
    upsert<T extends OrderLineUpsertArgs>(args: SelectSubset<T, OrderLineUpsertArgs<ExtArgs>>): Prisma__OrderLineClient<$Result.GetResult<Prisma.$OrderLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineCountArgs} args - Arguments to filter OrderLines to count.
     * @example
     * // Count the number of OrderLines
     * const count = await prisma.orderLine.count({
     *   where: {
     *     // ... the filter for the OrderLines we want to count
     *   }
     * })
    **/
    count<T extends OrderLineCountArgs>(
      args?: Subset<T, OrderLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderLineAggregateArgs>(args: Subset<T, OrderLineAggregateArgs>): Prisma.PrismaPromise<GetOrderLineAggregateType<T>>

    /**
     * Group by OrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderLineGroupByArgs['orderBy'] }
        : { orderBy?: OrderLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderLine model
   */
  readonly fields: OrderLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderLine model
   */
  interface OrderLineFieldRefs {
    readonly id: FieldRef<"OrderLine", 'Int'>
    readonly orderId: FieldRef<"OrderLine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderLine findUnique
   */
  export type OrderLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter, which OrderLine to fetch.
     */
    where: OrderLineWhereUniqueInput
  }

  /**
   * OrderLine findUniqueOrThrow
   */
  export type OrderLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter, which OrderLine to fetch.
     */
    where: OrderLineWhereUniqueInput
  }

  /**
   * OrderLine findFirst
   */
  export type OrderLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter, which OrderLine to fetch.
     */
    where?: OrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLines to fetch.
     */
    orderBy?: OrderLineOrderByWithRelationInput | OrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLines.
     */
    cursor?: OrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLines.
     */
    distinct?: OrderLineScalarFieldEnum | OrderLineScalarFieldEnum[]
  }

  /**
   * OrderLine findFirstOrThrow
   */
  export type OrderLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter, which OrderLine to fetch.
     */
    where?: OrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLines to fetch.
     */
    orderBy?: OrderLineOrderByWithRelationInput | OrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLines.
     */
    cursor?: OrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLines.
     */
    distinct?: OrderLineScalarFieldEnum | OrderLineScalarFieldEnum[]
  }

  /**
   * OrderLine findMany
   */
  export type OrderLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter, which OrderLines to fetch.
     */
    where?: OrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLines to fetch.
     */
    orderBy?: OrderLineOrderByWithRelationInput | OrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderLines.
     */
    cursor?: OrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLines.
     */
    skip?: number
    distinct?: OrderLineScalarFieldEnum | OrderLineScalarFieldEnum[]
  }

  /**
   * OrderLine create
   */
  export type OrderLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderLine.
     */
    data: XOR<OrderLineCreateInput, OrderLineUncheckedCreateInput>
  }

  /**
   * OrderLine createMany
   */
  export type OrderLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderLines.
     */
    data: OrderLineCreateManyInput | OrderLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderLine createManyAndReturn
   */
  export type OrderLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * The data used to create many OrderLines.
     */
    data: OrderLineCreateManyInput | OrderLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderLine update
   */
  export type OrderLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderLine.
     */
    data: XOR<OrderLineUpdateInput, OrderLineUncheckedUpdateInput>
    /**
     * Choose, which OrderLine to update.
     */
    where: OrderLineWhereUniqueInput
  }

  /**
   * OrderLine updateMany
   */
  export type OrderLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderLines.
     */
    data: XOR<OrderLineUpdateManyMutationInput, OrderLineUncheckedUpdateManyInput>
    /**
     * Filter which OrderLines to update
     */
    where?: OrderLineWhereInput
    /**
     * Limit how many OrderLines to update.
     */
    limit?: number
  }

  /**
   * OrderLine updateManyAndReturn
   */
  export type OrderLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * The data used to update OrderLines.
     */
    data: XOR<OrderLineUpdateManyMutationInput, OrderLineUncheckedUpdateManyInput>
    /**
     * Filter which OrderLines to update
     */
    where?: OrderLineWhereInput
    /**
     * Limit how many OrderLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderLine upsert
   */
  export type OrderLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderLine to update in case it exists.
     */
    where: OrderLineWhereUniqueInput
    /**
     * In case the OrderLine found by the `where` argument doesn't exist, create a new OrderLine with this data.
     */
    create: XOR<OrderLineCreateInput, OrderLineUncheckedCreateInput>
    /**
     * In case the OrderLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderLineUpdateInput, OrderLineUncheckedUpdateInput>
  }

  /**
   * OrderLine delete
   */
  export type OrderLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
    /**
     * Filter which OrderLine to delete.
     */
    where: OrderLineWhereUniqueInput
  }

  /**
   * OrderLine deleteMany
   */
  export type OrderLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderLines to delete
     */
    where?: OrderLineWhereInput
    /**
     * Limit how many OrderLines to delete.
     */
    limit?: number
  }

  /**
   * OrderLine without action
   */
  export type OrderLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderLine
     */
    select?: OrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderLine
     */
    omit?: OrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderLineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PDFScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId'
  };

  export type PDFScalarFieldEnum = (typeof PDFScalarFieldEnum)[keyof typeof PDFScalarFieldEnum]


  export const OrderLineScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId'
  };

  export type OrderLineScalarFieldEnum = (typeof OrderLineScalarFieldEnum)[keyof typeof OrderLineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    invoices?: InvoiceListRelationFilter
    orderLines?: OrderLineListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    orderLines?: OrderLineOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    invoices?: InvoiceListRelationFilter
    orderLines?: OrderLineListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    orderId?: IntFilter<"Invoice"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    PDF?: PDFListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
    PDF?: PDFOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    orderId?: IntFilter<"Invoice"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    PDF?: PDFListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    orderId?: IntWithAggregatesFilter<"Invoice"> | number
  }

  export type PDFWhereInput = {
    AND?: PDFWhereInput | PDFWhereInput[]
    OR?: PDFWhereInput[]
    NOT?: PDFWhereInput | PDFWhereInput[]
    id?: IntFilter<"PDF"> | number
    invoiceId?: IntFilter<"PDF"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type PDFOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PDFWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PDFWhereInput | PDFWhereInput[]
    OR?: PDFWhereInput[]
    NOT?: PDFWhereInput | PDFWhereInput[]
    invoiceId?: IntFilter<"PDF"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type PDFOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    _count?: PDFCountOrderByAggregateInput
    _avg?: PDFAvgOrderByAggregateInput
    _max?: PDFMaxOrderByAggregateInput
    _min?: PDFMinOrderByAggregateInput
    _sum?: PDFSumOrderByAggregateInput
  }

  export type PDFScalarWhereWithAggregatesInput = {
    AND?: PDFScalarWhereWithAggregatesInput | PDFScalarWhereWithAggregatesInput[]
    OR?: PDFScalarWhereWithAggregatesInput[]
    NOT?: PDFScalarWhereWithAggregatesInput | PDFScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PDF"> | number
    invoiceId?: IntWithAggregatesFilter<"PDF"> | number
  }

  export type OrderLineWhereInput = {
    AND?: OrderLineWhereInput | OrderLineWhereInput[]
    OR?: OrderLineWhereInput[]
    NOT?: OrderLineWhereInput | OrderLineWhereInput[]
    id?: IntFilter<"OrderLine"> | number
    orderId?: IntFilter<"OrderLine"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderLineOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderLineWhereInput | OrderLineWhereInput[]
    OR?: OrderLineWhereInput[]
    NOT?: OrderLineWhereInput | OrderLineWhereInput[]
    orderId?: IntFilter<"OrderLine"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderLineOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    _count?: OrderLineCountOrderByAggregateInput
    _avg?: OrderLineAvgOrderByAggregateInput
    _max?: OrderLineMaxOrderByAggregateInput
    _min?: OrderLineMinOrderByAggregateInput
    _sum?: OrderLineSumOrderByAggregateInput
  }

  export type OrderLineScalarWhereWithAggregatesInput = {
    AND?: OrderLineScalarWhereWithAggregatesInput | OrderLineScalarWhereWithAggregatesInput[]
    OR?: OrderLineScalarWhereWithAggregatesInput[]
    NOT?: OrderLineScalarWhereWithAggregatesInput | OrderLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderLine"> | number
    orderId?: IntWithAggregatesFilter<"OrderLine"> | number
  }

  export type OrderCreateInput = {
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
    orderLines?: OrderLineCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
    orderLines?: OrderLineUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
    orderLines?: OrderLineUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
    orderLines?: OrderLineUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
  }

  export type OrderUpdateManyMutationInput = {

  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    order: OrderCreateNestedOneWithoutInvoicesInput
    PDF?: PDFCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    orderId: number
    PDF?: PDFUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutInvoicesNestedInput
    PDF?: PDFUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    PDF?: PDFUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: number
    orderId: number
  }

  export type InvoiceUpdateManyMutationInput = {

  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type PDFCreateInput = {
    invoice: InvoiceCreateNestedOneWithoutPDFInput
  }

  export type PDFUncheckedCreateInput = {
    id?: number
    invoiceId: number
  }

  export type PDFUpdateInput = {
    invoice?: InvoiceUpdateOneRequiredWithoutPDFNestedInput
  }

  export type PDFUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type PDFCreateManyInput = {
    id?: number
    invoiceId: number
  }

  export type PDFUpdateManyMutationInput = {

  }

  export type PDFUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderLineCreateInput = {
    order: OrderCreateNestedOneWithoutOrderLinesInput
  }

  export type OrderLineUncheckedCreateInput = {
    id?: number
    orderId: number
  }

  export type OrderLineUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutOrderLinesNestedInput
  }

  export type OrderLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderLineCreateManyInput = {
    id?: number
    orderId: number
  }

  export type OrderLineUpdateManyMutationInput = {

  }

  export type OrderLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type OrderLineListRelationFilter = {
    every?: OrderLineWhereInput
    some?: OrderLineWhereInput
    none?: OrderLineWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PDFListRelationFilter = {
    every?: PDFWhereInput
    some?: PDFWhereInput
    none?: PDFWhereInput
  }

  export type PDFOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PDFCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
  }

  export type PDFAvgOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
  }

  export type PDFMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
  }

  export type PDFMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
  }

  export type PDFSumOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
  }

  export type OrderLineCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderLineAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderLineMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderLineMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderLineSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type InvoiceCreateNestedManyWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type OrderLineCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput> | OrderLineCreateWithoutOrderInput[] | OrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineCreateOrConnectWithoutOrderInput | OrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: OrderLineCreateManyOrderInputEnvelope
    connect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type OrderLineUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput> | OrderLineCreateWithoutOrderInput[] | OrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineCreateOrConnectWithoutOrderInput | OrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: OrderLineCreateManyOrderInputEnvelope
    connect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
  }

  export type InvoiceUpdateManyWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrderInput | InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrderInput | InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrderInput | InvoiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type OrderLineUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput> | OrderLineCreateWithoutOrderInput[] | OrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineCreateOrConnectWithoutOrderInput | OrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: OrderLineUpsertWithWhereUniqueWithoutOrderInput | OrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderLineCreateManyOrderInputEnvelope
    set?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    disconnect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    delete?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    connect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    update?: OrderLineUpdateWithWhereUniqueWithoutOrderInput | OrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderLineUpdateManyWithWhereWithoutOrderInput | OrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderLineScalarWhereInput | OrderLineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrderInput | InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrderInput | InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrderInput | InvoiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type OrderLineUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput> | OrderLineCreateWithoutOrderInput[] | OrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderLineCreateOrConnectWithoutOrderInput | OrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: OrderLineUpsertWithWhereUniqueWithoutOrderInput | OrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderLineCreateManyOrderInputEnvelope
    set?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    disconnect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    delete?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    connect?: OrderLineWhereUniqueInput | OrderLineWhereUniqueInput[]
    update?: OrderLineUpdateWithWhereUniqueWithoutOrderInput | OrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderLineUpdateManyWithWhereWithoutOrderInput | OrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderLineScalarWhereInput | OrderLineScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<OrderCreateWithoutInvoicesInput, OrderUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutInvoicesInput
    connect?: OrderWhereUniqueInput
  }

  export type PDFCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput> | PDFCreateWithoutInvoiceInput[] | PDFUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutInvoiceInput | PDFCreateOrConnectWithoutInvoiceInput[]
    createMany?: PDFCreateManyInvoiceInputEnvelope
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
  }

  export type PDFUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput> | PDFCreateWithoutInvoiceInput[] | PDFUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutInvoiceInput | PDFCreateOrConnectWithoutInvoiceInput[]
    createMany?: PDFCreateManyInvoiceInputEnvelope
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<OrderCreateWithoutInvoicesInput, OrderUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutInvoicesInput
    upsert?: OrderUpsertWithoutInvoicesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutInvoicesInput, OrderUpdateWithoutInvoicesInput>, OrderUncheckedUpdateWithoutInvoicesInput>
  }

  export type PDFUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput> | PDFCreateWithoutInvoiceInput[] | PDFUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutInvoiceInput | PDFCreateOrConnectWithoutInvoiceInput[]
    upsert?: PDFUpsertWithWhereUniqueWithoutInvoiceInput | PDFUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PDFCreateManyInvoiceInputEnvelope
    set?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    disconnect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    delete?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    update?: PDFUpdateWithWhereUniqueWithoutInvoiceInput | PDFUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PDFUpdateManyWithWhereWithoutInvoiceInput | PDFUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PDFScalarWhereInput | PDFScalarWhereInput[]
  }

  export type PDFUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput> | PDFCreateWithoutInvoiceInput[] | PDFUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PDFCreateOrConnectWithoutInvoiceInput | PDFCreateOrConnectWithoutInvoiceInput[]
    upsert?: PDFUpsertWithWhereUniqueWithoutInvoiceInput | PDFUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PDFCreateManyInvoiceInputEnvelope
    set?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    disconnect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    delete?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    connect?: PDFWhereUniqueInput | PDFWhereUniqueInput[]
    update?: PDFUpdateWithWhereUniqueWithoutInvoiceInput | PDFUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PDFUpdateManyWithWhereWithoutInvoiceInput | PDFUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PDFScalarWhereInput | PDFScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutPDFInput = {
    create?: XOR<InvoiceCreateWithoutPDFInput, InvoiceUncheckedCreateWithoutPDFInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPDFInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutPDFNestedInput = {
    create?: XOR<InvoiceCreateWithoutPDFInput, InvoiceUncheckedCreateWithoutPDFInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPDFInput
    upsert?: InvoiceUpsertWithoutPDFInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPDFInput, InvoiceUpdateWithoutPDFInput>, InvoiceUncheckedUpdateWithoutPDFInput>
  }

  export type OrderCreateNestedOneWithoutOrderLinesInput = {
    create?: XOR<OrderCreateWithoutOrderLinesInput, OrderUncheckedCreateWithoutOrderLinesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderLinesInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderLinesNestedInput = {
    create?: XOR<OrderCreateWithoutOrderLinesInput, OrderUncheckedCreateWithoutOrderLinesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderLinesInput
    upsert?: OrderUpsertWithoutOrderLinesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderLinesInput, OrderUpdateWithoutOrderLinesInput>, OrderUncheckedUpdateWithoutOrderLinesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvoiceCreateWithoutOrderInput = {
    PDF?: PDFCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutOrderInput = {
    id?: number
    PDF?: PDFUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
  }

  export type InvoiceCreateManyOrderInputEnvelope = {
    data: InvoiceCreateManyOrderInput | InvoiceCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderLineCreateWithoutOrderInput = {

  }

  export type OrderLineUncheckedCreateWithoutOrderInput = {
    id?: number
  }

  export type OrderLineCreateOrConnectWithoutOrderInput = {
    where: OrderLineWhereUniqueInput
    create: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput>
  }

  export type OrderLineCreateManyOrderInputEnvelope = {
    data: OrderLineCreateManyOrderInput | OrderLineCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutOrderInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutOrderInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    orderId?: IntFilter<"Invoice"> | number
  }

  export type OrderLineUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderLineWhereUniqueInput
    update: XOR<OrderLineUpdateWithoutOrderInput, OrderLineUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderLineCreateWithoutOrderInput, OrderLineUncheckedCreateWithoutOrderInput>
  }

  export type OrderLineUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderLineWhereUniqueInput
    data: XOR<OrderLineUpdateWithoutOrderInput, OrderLineUncheckedUpdateWithoutOrderInput>
  }

  export type OrderLineUpdateManyWithWhereWithoutOrderInput = {
    where: OrderLineScalarWhereInput
    data: XOR<OrderLineUpdateManyMutationInput, OrderLineUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderLineScalarWhereInput = {
    AND?: OrderLineScalarWhereInput | OrderLineScalarWhereInput[]
    OR?: OrderLineScalarWhereInput[]
    NOT?: OrderLineScalarWhereInput | OrderLineScalarWhereInput[]
    id?: IntFilter<"OrderLine"> | number
    orderId?: IntFilter<"OrderLine"> | number
  }

  export type OrderCreateWithoutInvoicesInput = {
    orderLines?: OrderLineCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutInvoicesInput = {
    id?: number
    orderLines?: OrderLineUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutInvoicesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutInvoicesInput, OrderUncheckedCreateWithoutInvoicesInput>
  }

  export type PDFCreateWithoutInvoiceInput = {

  }

  export type PDFUncheckedCreateWithoutInvoiceInput = {
    id?: number
  }

  export type PDFCreateOrConnectWithoutInvoiceInput = {
    where: PDFWhereUniqueInput
    create: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput>
  }

  export type PDFCreateManyInvoiceInputEnvelope = {
    data: PDFCreateManyInvoiceInput | PDFCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutInvoicesInput = {
    update: XOR<OrderUpdateWithoutInvoicesInput, OrderUncheckedUpdateWithoutInvoicesInput>
    create: XOR<OrderCreateWithoutInvoicesInput, OrderUncheckedCreateWithoutInvoicesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutInvoicesInput, OrderUncheckedUpdateWithoutInvoicesInput>
  }

  export type OrderUpdateWithoutInvoicesInput = {
    orderLines?: OrderLineUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderLines?: OrderLineUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type PDFUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PDFWhereUniqueInput
    update: XOR<PDFUpdateWithoutInvoiceInput, PDFUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PDFCreateWithoutInvoiceInput, PDFUncheckedCreateWithoutInvoiceInput>
  }

  export type PDFUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PDFWhereUniqueInput
    data: XOR<PDFUpdateWithoutInvoiceInput, PDFUncheckedUpdateWithoutInvoiceInput>
  }

  export type PDFUpdateManyWithWhereWithoutInvoiceInput = {
    where: PDFScalarWhereInput
    data: XOR<PDFUpdateManyMutationInput, PDFUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PDFScalarWhereInput = {
    AND?: PDFScalarWhereInput | PDFScalarWhereInput[]
    OR?: PDFScalarWhereInput[]
    NOT?: PDFScalarWhereInput | PDFScalarWhereInput[]
    id?: IntFilter<"PDF"> | number
    invoiceId?: IntFilter<"PDF"> | number
  }

  export type InvoiceCreateWithoutPDFInput = {
    order: OrderCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutPDFInput = {
    id?: number
    orderId: number
  }

  export type InvoiceCreateOrConnectWithoutPDFInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPDFInput, InvoiceUncheckedCreateWithoutPDFInput>
  }

  export type InvoiceUpsertWithoutPDFInput = {
    update: XOR<InvoiceUpdateWithoutPDFInput, InvoiceUncheckedUpdateWithoutPDFInput>
    create: XOR<InvoiceCreateWithoutPDFInput, InvoiceUncheckedCreateWithoutPDFInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPDFInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPDFInput, InvoiceUncheckedUpdateWithoutPDFInput>
  }

  export type InvoiceUpdateWithoutPDFInput = {
    order?: OrderUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPDFInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateWithoutOrderLinesInput = {
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderLinesInput = {
    id?: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderLinesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderLinesInput, OrderUncheckedCreateWithoutOrderLinesInput>
  }

  export type OrderUpsertWithoutOrderLinesInput = {
    update: XOR<OrderUpdateWithoutOrderLinesInput, OrderUncheckedUpdateWithoutOrderLinesInput>
    create: XOR<OrderCreateWithoutOrderLinesInput, OrderUncheckedCreateWithoutOrderLinesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderLinesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderLinesInput, OrderUncheckedUpdateWithoutOrderLinesInput>
  }

  export type OrderUpdateWithoutOrderLinesInput = {
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type InvoiceCreateManyOrderInput = {
    id?: number
  }

  export type OrderLineCreateManyOrderInput = {
    id?: number
  }

  export type InvoiceUpdateWithoutOrderInput = {
    PDF?: PDFUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    PDF?: PDFUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderLineUpdateWithoutOrderInput = {

  }

  export type OrderLineUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderLineUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type PDFCreateManyInvoiceInput = {
    id?: number
  }

  export type PDFUpdateWithoutInvoiceInput = {

  }

  export type PDFUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type PDFUncheckedUpdateManyWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}