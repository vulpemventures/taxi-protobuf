// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package trade

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// TaxiClient is the client API for Taxi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TaxiClient interface {
	// ListAssets rpc returns a subset of supported elements assets that could be accepted as payment
	// for topups
	ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsReply, error)
	// TopupWithAsset rpc returns the a partial signed elements transaction with a LBTC input (eventual change) and a asset denominated output as payout fot the taxi.
	// The transaction is signed with SIGHASH_ALL | ANYONECANPAY
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
	err := c.cc.Invoke(ctx, "/Taxi/ListAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *taxiClient) TopupWithAsset(ctx context.Context, in *TopupWithAssetRequest, opts ...grpc.CallOption) (*TopupWithAssetReply, error) {
	out := new(TopupWithAssetReply)
	err := c.cc.Invoke(ctx, "/Taxi/TopupWithAsset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TaxiServer is the server API for Taxi service.
// All implementations must embed UnimplementedTaxiServer
// for forward compatibility
type TaxiServer interface {
	// ListAssets rpc returns a subset of supported elements assets that could be accepted as payment
	// for topups
	ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsReply, error)
	// TopupWithAsset rpc returns the a partial signed elements transaction with a LBTC input (eventual change) and a asset denominated output as payout fot the taxi.
	// The transaction is signed with SIGHASH_ALL | ANYONECANPAY
	TopupWithAsset(context.Context, *TopupWithAssetRequest) (*TopupWithAssetReply, error)
	mustEmbedUnimplementedTaxiServer()
}

// UnimplementedTaxiServer must be embedded to have forward compatible implementations.
type UnimplementedTaxiServer struct {
}

func (*UnimplementedTaxiServer) ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAssets not implemented")
}
func (*UnimplementedTaxiServer) TopupWithAsset(context.Context, *TopupWithAssetRequest) (*TopupWithAssetReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TopupWithAsset not implemented")
}
func (*UnimplementedTaxiServer) mustEmbedUnimplementedTaxiServer() {}

func RegisterTaxiServer(s *grpc.Server, srv TaxiServer) {
	s.RegisterService(&_Taxi_serviceDesc, srv)
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
		FullMethod: "/Taxi/ListAssets",
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
		FullMethod: "/Taxi/TopupWithAsset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TaxiServer).TopupWithAsset(ctx, req.(*TopupWithAssetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Taxi_serviceDesc = grpc.ServiceDesc{
	ServiceName: "Taxi",
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

// AdminClient is the client API for Admin service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AdminClient interface {
	// ListTopups returns all the internal topups
	ListTopups(ctx context.Context, in *ListTopupsRequest, opts ...grpc.CallOption) (*ListTopupsReply, error)
	// ChangeSpread updates the percentage taken as service fee
	ChangeSpread(ctx context.Context, in *ChangeSpreadRequest, opts ...grpc.CallOption) (*ChangeSpreadReply, error)
	// AddAsset lets update the asset_hash with price if exists, or creates it
	AddAsset(ctx context.Context, in *AddAssetRequest, opts ...grpc.CallOption) (*AddAssetReply, error)
}

type adminClient struct {
	cc grpc.ClientConnInterface
}

func NewAdminClient(cc grpc.ClientConnInterface) AdminClient {
	return &adminClient{cc}
}

func (c *adminClient) ListTopups(ctx context.Context, in *ListTopupsRequest, opts ...grpc.CallOption) (*ListTopupsReply, error) {
	out := new(ListTopupsReply)
	err := c.cc.Invoke(ctx, "/Admin/ListTopups", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminClient) ChangeSpread(ctx context.Context, in *ChangeSpreadRequest, opts ...grpc.CallOption) (*ChangeSpreadReply, error) {
	out := new(ChangeSpreadReply)
	err := c.cc.Invoke(ctx, "/Admin/ChangeSpread", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *adminClient) AddAsset(ctx context.Context, in *AddAssetRequest, opts ...grpc.CallOption) (*AddAssetReply, error) {
	out := new(AddAssetReply)
	err := c.cc.Invoke(ctx, "/Admin/AddAsset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AdminServer is the server API for Admin service.
// All implementations must embed UnimplementedAdminServer
// for forward compatibility
type AdminServer interface {
	// ListTopups returns all the internal topups
	ListTopups(context.Context, *ListTopupsRequest) (*ListTopupsReply, error)
	// ChangeSpread updates the percentage taken as service fee
	ChangeSpread(context.Context, *ChangeSpreadRequest) (*ChangeSpreadReply, error)
	// AddAsset lets update the asset_hash with price if exists, or creates it
	AddAsset(context.Context, *AddAssetRequest) (*AddAssetReply, error)
	mustEmbedUnimplementedAdminServer()
}

// UnimplementedAdminServer must be embedded to have forward compatible implementations.
type UnimplementedAdminServer struct {
}

func (*UnimplementedAdminServer) ListTopups(context.Context, *ListTopupsRequest) (*ListTopupsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListTopups not implemented")
}
func (*UnimplementedAdminServer) ChangeSpread(context.Context, *ChangeSpreadRequest) (*ChangeSpreadReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangeSpread not implemented")
}
func (*UnimplementedAdminServer) AddAsset(context.Context, *AddAssetRequest) (*AddAssetReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddAsset not implemented")
}
func (*UnimplementedAdminServer) mustEmbedUnimplementedAdminServer() {}

func RegisterAdminServer(s *grpc.Server, srv AdminServer) {
	s.RegisterService(&_Admin_serviceDesc, srv)
}

func _Admin_ListTopups_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListTopupsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServer).ListTopups(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Admin/ListTopups",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServer).ListTopups(ctx, req.(*ListTopupsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Admin_ChangeSpread_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChangeSpreadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServer).ChangeSpread(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Admin/ChangeSpread",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServer).ChangeSpread(ctx, req.(*ChangeSpreadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Admin_AddAsset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddAssetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AdminServer).AddAsset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Admin/AddAsset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AdminServer).AddAsset(ctx, req.(*AddAssetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Admin_serviceDesc = grpc.ServiceDesc{
	ServiceName: "Admin",
	HandlerType: (*AdminServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListTopups",
			Handler:    _Admin_ListTopups_Handler,
		},
		{
			MethodName: "ChangeSpread",
			Handler:    _Admin_ChangeSpread_Handler,
		},
		{
			MethodName: "AddAsset",
			Handler:    _Admin_AddAsset_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "taxi.proto",
}
