// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package taxi

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TaxiClient is the client API for Taxi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TaxiClient interface {
	// ListAssets rpc returns a subset of supported elements assets that could be accepted as payment
	// for topups
	ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsReply, error)
	// TopupWithAsset rpc returns a transaction (pset) with a LBTC input and a payout with defined asset fot taxi.
	// The transaction is signed with SIGHASH_SINGLE | ANYONECANPAY
	TopupWithAsset(ctx context.Context, in *TopupWithAssetRequest, opts ...grpc.CallOption) (*TopupWithAssetReply, error)
}

type taxiClient struct {
	cc grpc.ClientConnInterface
}

func NewTaxiClient(cc grpc.ClientConnInterface) TaxiClient {
	return &taxiClient{cc}
}

func (c *taxiClient) ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsReply, error) {
	out := new(ListAssetsReply)
	err := c.cc.Invoke(ctx, "/taxi.Taxi/ListAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taxiClient) TopupWithAsset(ctx context.Context, in *TopupWithAssetRequest, opts ...grpc.CallOption) (*TopupWithAssetReply, error) {
	out := new(TopupWithAssetReply)
	err := c.cc.Invoke(ctx, "/taxi.Taxi/TopupWithAsset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TaxiServer is the server API for Taxi service.
// All implementations should embed UnimplementedTaxiServer
// for forward compatibility
type TaxiServer interface {
	// ListAssets rpc returns a subset of supported elements assets that could be accepted as payment
	// for topups
	ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsReply, error)
	// TopupWithAsset rpc returns a transaction (pset) with a LBTC input and a payout with defined asset fot taxi.
	// The transaction is signed with SIGHASH_SINGLE | ANYONECANPAY
	TopupWithAsset(context.Context, *TopupWithAssetRequest) (*TopupWithAssetReply, error)
}

// UnimplementedTaxiServer should be embedded to have forward compatible implementations.
type UnimplementedTaxiServer struct {
}

func (UnimplementedTaxiServer) ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAssets not implemented")
}
func (UnimplementedTaxiServer) TopupWithAsset(context.Context, *TopupWithAssetRequest) (*TopupWithAssetReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TopupWithAsset not implemented")
}

// UnsafeTaxiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TaxiServer will
// result in compilation errors.
type UnsafeTaxiServer interface {
	mustEmbedUnimplementedTaxiServer()
}

func RegisterTaxiServer(s grpc.ServiceRegistrar, srv TaxiServer) {
	s.RegisterService(&Taxi_ServiceDesc, srv)
}

func _Taxi_ListAssets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAssetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TaxiServer).ListAssets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/taxi.Taxi/ListAssets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TaxiServer).ListAssets(ctx, req.(*ListAssetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Taxi_TopupWithAsset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TopupWithAssetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TaxiServer).TopupWithAsset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/taxi.Taxi/TopupWithAsset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TaxiServer).TopupWithAsset(ctx, req.(*TopupWithAssetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Taxi_ServiceDesc is the grpc.ServiceDesc for Taxi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Taxi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "taxi.Taxi",
	HandlerType: (*TaxiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListAssets",
			Handler:    _Taxi_ListAssets_Handler,
		},
		{
			MethodName: "TopupWithAsset",
			Handler:    _Taxi_TopupWithAsset_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "taxi.proto",
}